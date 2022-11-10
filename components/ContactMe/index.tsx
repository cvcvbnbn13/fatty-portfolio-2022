import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:cvcvbnbn13@gmail.com?subject=${formData.subject}&body=${formData.message}`
  }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 tracking-widest text-gray-500 text-2xl">
        與我聯絡
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">0910-501-305</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">cvcvbnbn13@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              {...register('name')}
              className="contactInput"
              placeholder="姓名"
              type="text"
            />
            <input
              {...register('email')}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            placeholder="主旨"
            type="text"
          />
          <textarea
            {...register('message')}
            className="contactInput"
            placeholder="想說的話"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            送出
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
