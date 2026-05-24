import { useState, useEffect, useRef } from "react"

import axios from "axios"

import {
  FaRobot,
  FaTimes,
  FaPaperPlane
} from "react-icons/fa"

import { TypeAnimation } from "react-type-animation"

function ChatBot() {

  const [isOpen, setIsOpen] = useState(false)

  const [input, setInput] = useState("")

  const [loading, setLoading] = useState(false)

  const messagesEndRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      text: "Hi 👋 I'm Shifas AI Assistant.\nAsk me anything about Shifas, his skills, projects, education, certifications, or career goals.",
      sender: "bot"
    }
  ])

  // AUTO SCROLL

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    })

  }, [messages])

  // SEND MESSAGE

  const sendMessage = async () => {

    if (!input.trim()) return

    const userMessage = {
      text: input,
      sender: "user"
    }

    setMessages((prev) => [
      ...prev,
      userMessage
    ])

    setInput("")

    setLoading(true)

    try {

      const response = await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {
          model: "openai/gpt-3.5-turbo",

          messages: [

            {
              role: "system",

              content: `

You are an intelligent AI portfolio assistant for Shifas PS.

Always answer professionally, clearly, recruiter-friendly, and confidently.

ABOUT SHIFAS:

Full Name:
Shifas PS

Age:
22

Location:
Thrissur, Kerala, India

Degree:
B.Tech in Artificial Intelligence and Data Science

College:
Royal College of Engineering and Technology

University:
APJ Abdul Kalam Technological University Kerala

Graduation Year:
2026

10th School:
Bethany St. Johns English Higher Secondary School, Kunnamkulam, Thrissur, Kerala

12th School:
G.H.S.S Kochanoor, Thrissur, Kerala

CAREER GOALS:
- AI Engineer
- Machine Learning Engineer
- IoT Developer
- Data Scientist

Future Goal:
Build smart AI systems and innovative automation technologies.

SKILLS:
Python,
React,
JavaScript,
SQL,
HTML,
CSS,
Git,
Excel,
Arduino,
TensorFlow,
Scikit-Learn,
Pandas,
NumPy,
Machine Learning,
Django REST Framework,
Backend Development,
Data Analysis,
Full Stack Development.

STRONGEST SKILLS:
- Problem Solving
- Teamwork
- Fast Learner
- Python Programming

PROJECTS:

1. AI Task Management System
AI-powered full-stack task management platform using React and Django REST Framework with chatbot integration.

2. Smart AI Autonomous Robot
Machine learning based robotic automation system with intelligent decision making.

3. Multi-Branch Inventory Management System
Centralized stock and inventory management solution.

4. Pay on Purchase System
Backend automation system for billing and purchase workflows using Python and SQL.

INTERNSHIP:
Completed PM-VIKAS IoT Assistant internship at IIIT Kottayam.

CERTIFICATIONS:
- EY & Microsoft AI Skills Passport Program
- PM-VIKAS Internship Certificate
- Full Stack Development Learning

LANGUAGES:
English and Malayalam

HOBBIES:
Cricket,
Movies,
Music

DREAM COMPANIES:
Google,
Microsoft,
Tesla

CONTACT DETAILS:

Email:
shifasshamsu2003@gmail.com

GitHub:
https://github.com/shifaz935

LinkedIn:
https://www.linkedin.com/in/shifas-p-s-965895397/

IMPORTANT RULES:

- Never call him "Shifa". Always use "Shifas".
- Never give fake information.
- Do not say his projects were developed during PM-VIKAS unless specifically asked.
- Answer like ChatGPT professionally.
- Keep answers clean and modern.
- Give concise recruiter-friendly answers.
              `
            },

            {
              role: "user",
              content: input
            }

          ]
        },

        {
          headers: {

            Authorization:
              `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,

            "Content-Type": "application/json"
          }
        }
      )

      const botReply = {

        text:
          response.data.choices[0].message.content,

        sender: "bot"
      }

      setMessages((prev) => [
        ...prev,
        botReply
      ])

    }

    catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          text:
            "Sorry, AI assistant is currently unavailable.",
          sender: "bot"
        }
      ])

    }

    setLoading(false)

  }

  return (

    <>

      {/* CHAT BUTTON */}

      <button

        onClick={() => setIsOpen(!isOpen)}

        className="
          fixed
          bottom-6
          right-4
          md:right-6
          z-50
          w-16
          h-16
          rounded-full
          bg-cyan-500
          text-black
          text-2xl
          flex
          items-center
          justify-center
          shadow-[0_0_30px_cyan]
          hover:scale-110
          transition
        "
      >

        {isOpen ? <FaTimes /> : <FaRobot />}

      </button>

      {/* CHAT WINDOW */}

      {isOpen && (

        <div className="
          fixed
          bottom-24
          right-2
          md:right-6
          w-[95vw]
          max-w-[400px]
          h-[75vh]
          md:h-[650px]
          bg-[#07111f]
          border
          border-cyan-500/30
          rounded-3xl
          shadow-[0_0_40px_rgba(0,255,255,0.3)]
          overflow-hidden
          z-50
          flex
          flex-col
          backdrop-blur-xl
        ">

          {/* HEADER */}

          <div className="
            bg-cyan-500
            p-4
            flex
            justify-between
            items-center
            text-black
          ">

            <div className="flex items-center gap-3">

              <div className="
                w-12
                h-12
                rounded-full
                bg-black
                flex
                items-center
                justify-center
                text-cyan-400
                text-xl
              ">

                <FaRobot />

              </div>

              <div>

                <h2 className="font-bold text-lg">
                  Shifas AI Assistant
                </h2>

                <p className="text-sm">
                  Online
                </p>

              </div>

            </div>

            <button

              onClick={() => setIsOpen(false)}

              className="
                text-3xl
                hover:rotate-90
                transition
              "
            >

              <FaTimes />

            </button>

          </div>

          {/* MESSAGES */}

          <div className="
            flex-1
            overflow-y-auto
            p-4
            flex
            flex-col
            gap-4
            scroll-smooth
          ">

            {messages.map((msg, index) => (

              <div

                key={index}

                className={`
                  flex
                  ${msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"}
                `}
              >

                <div

                  className={`
                    max-w-[85%]
                    px-5
                    py-4
                    rounded-3xl
                    text-sm
                    md:text-[15px]
                    leading-7
                    whitespace-pre-wrap

                    ${msg.sender === "user"
                      ? `
                        bg-cyan-500
                        text-black
                        rounded-br-md
                      `
                      : `
                        bg-[#111827]
                        text-white
                        rounded-bl-md
                        border
                        border-cyan-500/20
                      `}
                  `}
                >

                  {msg.sender === "bot" ? (

                    <TypeAnimation
                      sequence={[
                        msg.text
                      ]}
                      speed={85}
                      cursor={false}
                    />

                  ) : (

                    msg.text

                  )}

                </div>

              </div>

            ))}

            {loading && (

              <div className="flex justify-start">

                <div className="
                  bg-[#111827]
                  text-white
                  px-5
                  py-4
                  rounded-3xl
                  rounded-bl-md
                  border
                  border-cyan-500/20
                ">

                  <TypeAnimation
                    sequence={[
                      "Typing...",
                      1000,
                      "",
                      500
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />

                </div>

              </div>

            )}

            <div ref={messagesEndRef} />

          </div>

          {/* INPUT */}

          <div className="
            p-3
            border-t
            border-cyan-500/20
            flex
            gap-2
            items-center
            bg-[#07111f]
          ">

            <input

              type="text"

              placeholder="Ask anything..."

              value={input}

              onChange={(e) =>
                setInput(e.target.value)
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  sendMessage()
                }

              }}

              className="
                w-full
                bg-black/70
                text-white
                px-4
                py-3
                rounded-2xl
                outline-none
                text-sm
                min-w-0
              "
            />

            <button

              onClick={sendMessage}

              className="
                bg-cyan-500
                text-black
                min-w-[52px]
                h-[52px]
                rounded-2xl
                flex
                items-center
                justify-center
                hover:scale-105
                transition
                shrink-0
              "
            >

              <FaPaperPlane />

            </button>

          </div>

        </div>

      )}

    </>

  )
}

export default ChatBot