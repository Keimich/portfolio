import React from "react";

export default function ContactSection() {
  return (
    <div className="container">
      <div className="flex flex-col px-4 py-32 gap-4">
        <h3 className="text-blue-500">Contact</h3>
        <h4>Hey, let's work together?</h4>
        <div className="flex gap-4 justify-between">
          <div className="flex gap-4">
            <div className="bg-white flex justify-center items-center w-14 h-14 rounded-full drop-shadow-md">
              <i className="fa-solid fa-location-dot text-red-600 text-2xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue-500">Location</h3>
              <a>São Paulo, Brazil 🇧🇷</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white flex justify-center items-center w-14 h-14 rounded-full drop-shadow-md">
              <i className="fa-regular fa-paper-plane text-blue-500 text-2xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue-500">Mail</h3>
              <a href="mailto:jan.keimich@gmail.com">jan.keimich@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white flex justify-center items-center w-14 h-14 rounded-full drop-shadow-md">
              <i className="fa-brands fa-whatsapp text-green-600 text-2xl"></i>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue-500">WhatsApp</h3>
              <a href="tel:+5511999954486">+55 (11) 99995-4486</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
