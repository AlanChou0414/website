import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Contact.module.css'
import emailjs from 'emailjs-com'

// components
import Alert from '../components/Alert'

// icon
import { AiOutlineLoading } from 'react-icons/ai'

// type
import { ContactType } from '../type/type'

// env
const SERVICE_ID = import.meta.env.VITE_VAR_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_VAR_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_VAR_EMAILJS_PUBLIC_KEY


const Contact = () => {
  const [inputValue, setInputValue] = useState<ContactType>({})
  const [showAlert, setShowAlert] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const navigate = useNavigate()

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.id]: event.target.value
    })
  }

  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputValue.email) return
    setIsSending(true)
    try {
      const { firstName, lastName, email, message } = inputValue as ContactType
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        firstName,
        lastName,
        email,
        message
      }, PUBLIC_KEY)
      setInputValue({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsSending(false)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
        navigate('/')
      }, 1500)
    }
  }

  return (
    <section className={styles.section}>
      <form onSubmit={handleSendEmail}>
        <fieldset className={styles.fieldset}>
          <legend>Contact Me</legend>
          <div className={styles.userName}>
            <div className={styles.userNameInput}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={inputValue.firstName || ''}
                maxLength={10} placeholder='Chou'
                onChange={handleInputValue}
              />
            </div>
            <div className={styles.userNameInput}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={inputValue.lastName || ''}
                maxLength={10}
                placeholder='Alan'
                onChange={handleInputValue}
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={inputValue.email || ''}
            maxLength={30}
            placeholder='alan@gmail.com'
            onChange={handleInputValue}
            required />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={inputValue.message || ''}
            cols={10}
            rows={10}
            placeholder='message...'
            onChange={handleInputValue}
          />
          <div className={styles.btn}>
            {
              isSending
                ? <AiOutlineLoading className={styles.icon} size={35} />
                : <button>SEND</button>
            }
          </div>
        </fieldset>
      </form>
      {
        showAlert && <Alert />
      }
    </section>
  )
}
export default Contact