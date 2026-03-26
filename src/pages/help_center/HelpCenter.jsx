import { useState } from "react";
import { motion } from "framer-motion";

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why was my task rejected?",
      answer:
        "Tasks may be rejected if they do not meet quality guidelines, contain incomplete information, or violate platform rules. Please review the task instructions carefully before submitting.",
    },
    {
      question: "When will I receive my coins?",
      answer:
        "Coins are usually credited after task approval. Approval time depends on task verification and review process.",
    },
    {
      question: "How can I request a withdrawal?",
      answer:
        "Go to the Wallet section in your dashboard, check your available balance, and submit a withdrawal request following the provided instructions.",
    },
    {
      question: "Why is my account temporarily suspended?",
      answer:
        "Accounts may be suspended due to suspicious activity, multiple invalid submissions, or violation of platform terms. Contact support for further clarification.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  text-base-content p-6">
            <title>Zantaskly || Help Center Page </title>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold text-primary">
            Dashboard Help Center
          </h1>
          <p className="text-neutral mt-2">
            Find answers related to your account, tasks, earnings, and withdrawals.
          </p>
        </motion.div>

        {/* FAQ Section */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="card bg-base-200 shadow-lg rounded-xl"
            >
              <div
                className="card-body cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-semibold text-secondary flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </h2>

                {openIndex === index && (
                  <p className="mt-3 text-neutral">{faq.answer}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Ticket Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="card bg-base-200 shadow-xl rounded-xl mt-12"
        >
          <div className="card-body">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Submit a Support Request
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
              />

              <textarea
                placeholder="Describe your issue..."
                className="textarea textarea-bordered w-full h-32"
              ></textarea>

              <button
                type="submit"
                className="btn bg-primary text-base-100 hover:bg-secondary border-none rounded-xl"
              >
                Send Request
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
