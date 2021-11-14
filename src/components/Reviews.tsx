import ReviewsData from '../data/ReviewsData.json'


export default function Reviews() {

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-6xl font-bold mb-5 text-gray-600">What people <br />  are saying.</h1>
              <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-darkkhaki ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-darkkhaki ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-darkkhaki ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-darkkhaki ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-darkkhaki ml-1"></span>
              </div>
            </div>

            <div className="masonry sm:masonry-sm md:masonry-md">

              {ReviewsData.map((review, index) => 

                <div className="bg-white rounded-lg p-4 mb-6 shadow sm:inline-block break-inside" key={index + "key"}>
                  <div className="flex items-start text-left">
                    <div className="flex-shrink-0">
                      <div className="inline-block relative">
                        <div className="block relative">
                          <img alt="profil" src={`https://i.pravatar.cc/${review.avatar}`} className="mx-auto object-cover rounded-full h-16 w-16 " />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                          <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                          </path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <p className="flex items-baseline">
                        <span className="text-gray-600  font-bold">
                          {review.name}
                        </span>
                        <span className="text-gray-500   ml-2 text-sm">
                          {review.date}
                        </span>
                      </p>
                      <div className="flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                      </div>
                      <div className="mt-3">
                        <p className="mt-1">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

