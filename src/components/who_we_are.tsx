import React from 'react'

export default function WhoWeAre() {
  return (
      <section className="flex justify-center w-full py-16 bg-(--background-light)">
        <div className="w-full md:w-5/6 px-4">

          <h2 className="text-4xl font-bold text-center mb-4">
            Who We Are
          </h2>

          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            Imaging Technology is a Kerala-based medical imaging solutions provider
            specializing in Digital Radiography, X-Ray Rooms, C-Arm Systems,
            Imaging Equipment Consultation, and Clinical Establishment Support.
            Unlike traditional dealers, we focus on educating doctors before
            selling equipment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-(--main-color) flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-white text-3xl">
                  radiology
                </span>
              </div>
              <p className="font-medium">Digital Radiography</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-(--main-color) flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-white text-3xl">
                  room_preferences
                </span>
              </div>
              <p className="font-medium">X-Ray Rooms</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-(--main-color) flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-white text-3xl">
                  settings_accessibility
                </span>
              </div>
              <p className="font-medium">C-Arm Systems</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-(--main-color) flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-white text-3xl">
                  support_agent
                </span>
              </div>
              <p className="font-medium">Consultation</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-(--main-color) flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-white text-3xl">
                  local_hospital
                </span>
              </div>
              <p className="font-medium">Clinical Support</p>
            </div>

          </div>

        </div>
      </section>

  )
}
