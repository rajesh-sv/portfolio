import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, runTransaction } from "firebase/database";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { DatabaseReference, DataSnapshot } from "firebase/database";
import { toast } from "sonner";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey || "",
  authDomain: import.meta.env.VITE_authDomain || "",
  databaseURL: import.meta.env.VITE_databaseURL || "",
  projectId: import.meta.env.VITE_projectId || "",
  storageBucket: import.meta.env.VITE_storageBucket || "",
  messagingSenderId: import.meta.env.VITE_messagingSenderId || "",
  appId: import.meta.env.VITE_appId || "",
  measurementId: import.meta.env.VITE_measurementId || "",
};

const app = initializeApp(firebaseConfig);

export function useViewCounter() {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const db = getDatabase(app);
    const viewsRef: DatabaseReference = ref(db, "website/views");

    onValue(viewsRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val();

      setViews(data ? (data as number) : 0);
    });

    const incrementViews = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      runTransaction(viewsRef, (currentViews: any) => {
        return (currentViews || 0) + 1;
      });
    };

    const current_date = new Date();
    if (localStorage.getItem("last_visited")) {
      const last_visited_date = new Date(
        localStorage.getItem("last_visited") || new Date(),
      );
      const date_diff = daysBetween(last_visited_date, current_date);
      if (date_diff > 0) {
        localStorage.setItem("last_visited", current_date.toLocaleString());
        incrementViews();
      }
    } else {
      localStorage.setItem("last_visited", current_date.toLocaleString());
      incrementViews();
    }
  }, []);

  return { views };
}

interface FormData {
  name: string;
  email_id: string;
  company: string;
  message: string;
}

export function useSendEmail() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email_id: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [submissionResult, setSubmissionResult] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submissionResult === "success") {
      toast("Message has already been sent! Try again later.", {
        action: {
          label: "Close",
          onClick: () => undefined,
        },
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null);

    const sent_at = new Date().toString();

    try {
      const db = getFirestore(app);
      await addDoc(collection(db, "emails"), {
        ...formData,
        sent_at,
      });

      setSubmissionResult("success");
      setFormData({ name: "", email_id: "", company: "", message: "" });

      toast.success("Message has been sent!", {
        action: {
          label: "Close",
          onClick: () => undefined,
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error submitting form: ", error);
      setSubmissionResult("failure");

      toast.error("Message coudln't be sent!", {
        action: {
          label: "Close",
          onClick: () => undefined,
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    formData,
    handleChange,
    handleSubmit,
  };
}

function daysBetween(date1: Date, date2: Date): number {
  const diffInMs = Math.abs(date2.getTime() - date1.getTime());
  const diffInDays = Math.trunc(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays;
}
