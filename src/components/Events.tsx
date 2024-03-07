import Image from 'next/image';
import React from 'react';
import OnClickButton from './OnClickButton';

const TechnicalEvents = [
  {
    title: 'Paper presentation',
    image: '/Events/paper-presentation.jpeg',
    description:
      'This consists of only one round. Each team can present their research paper for 15 minutes with the aid of a PPT. Following which there will be a Q&A session by the judges based on the paper.',
    team: '1 to 3',
    location: 'MIT',
    contact: 'ABC',
    link: 'https://docs.google.com/forms/d/1Gz99nAy82iXluBxrKlnnsXfhyUv-zNS4kXn3rImqH9Q/edit?usp=drivesdk',
  },
  {
    title: 'Code-a-thon',
    image: '/Events/codeathon.jpeg',
    description:
      'This consists of two rounds. Round 1- Three programming questions are raised. Each team is allowed to work on any programming language to address the questions. Round 2 - One programming question and who gets it right first is chosen as the winner team. Next comes the runner and second-runner teams.',
    team: '2 or 3',
    location: 'MIT',
    contact: 'ABC',
    link: 'https://docs.google.com/forms/d/1-rUR3_Ep39NIxPeUR-tEMeNXH9z2NNURntuYUm2_SU0/edit?usp=drivesdk',
  },
  {
    title: 'Tech grill',
    image: '/Events/tech-grill.jpeg',
    description:
      'This consists of two rounds. Round 1 - Rapid fire round. Each team will be asked 10 questions in 10 minutes and will be evaluated based on accuracy. Round 2 - Buzzer round. A number of questions are asked and team is evaluated based on accuracy. Points: 10 (Correct on first attempt), 5 (Correct on second attempt), -5 (Wrong answer)',
    team: '1 or 2',
    location: 'MIT',
    contact: 'ABC',
    link: 'https://docs.google.com/forms/d/1p1Z5br7tPqkFfPy-TqEPr0LgTIeRAMmbM7gOMpvixA0/edit?usp=drivesdk',
  },
  {
    title: 'Techint (Technical+Hint)',
    image: '/Events/tech-hint.jpeg',
    description:
      'This consists of only one round. A lot of chits containing technical terms are put together. One takes each chit and gives hint while the other guesses the technical terms. Each team will be provided with 2 minutes of time.',
    team: '2',
    location: 'MIT',
    contact: 'ABC',
    link: 'https://docs.google.com/forms/d/1QHolruExLDQ3g78JR1ymGY3QKTlT_BtStZ8_yFvNE98/edit?usp=drivesdk',
  },
  {
    title: 'Tinktest',
    image: '/Events/tinktest.jpeg',
    description:
      'This consists of only one round. Each team will work on given Arduino based design on TinkerCAD. The time limit is 30 minutes. Team will be evaluated based on the running time and efficiency of the design and program.',
    team: '2 to 4',
    location: 'MIT',
    contact: 'ABC',
    link: 'https://docs.google.com/forms/d/1LGgPhNcN8DrPQOY9kRTW2NIstx0XFVY9_uUqj8yM7W8/edit?usp=drivesdk',
  },
  {
    title: 'Picxion',
    image: '/Events/picxion.jpeg',
    description:
      'This consists of only one round. This is the usual connexion event but  with technical terms.',
    team: 'Individual',
    location: 'MIT',
    contact: 'ABC',
    link: 'https://docs.google.com/forms/d/1FjBYsRM1OddCkhbBqusL1HturKaoQLBXATCIeu5ZXFQ/edit?usp=drivesdk',
  },
];

const Workshop = [
  {
    title: 'Embedded system design for IoT application',
    image: '/Events/embedded-iot.jpeg',
    description:
      'The speaker of the workshop is Dr. S. Meyyappan, Deputy Director, CIoT, MIT campus, Anna university. The workshop has been split into two sessions. The topics that will be covered in the workshop are: 1) Embedded processors 2) IoT stack 3) IoT system design. Theoretical guidance will be given during the morning session. The attendees will be enable to have Hands-on session during the afternoon session.',
    location: 'MIT',
    link: 'https://docs.google.com/forms/d/1HrKO3KMy4JS3xnSZBcP4a8TD-XKndTqSmD9NT9rHnoQ/edit?usp=drivesdk',
  },
  {
    title: 'Mechatronics',
    image: '/Events/mechatronics.jpeg',
    description:
      'Workshop is organized in collaboration with Siemens Centre of Excellence, MIT Campus, Anna University. This one-day workshop has two sessions. During the morning session, attendees will pay visit to SCoE labs and witness demonstrations. Then, they will be introduced to the mechatronics. During the afternoon session, attendees will have a hands-on session of TIA software and discuss the following topics: use of TIA portal, sensor and actuators working, work stations, ladder logic and PLC.',
    location: 'MIT',
    link: 'https://docs.google.com/forms/d/1AsrQq-ccdsYvRmjB75zuPs3ZgyhScePNT0QITV7Y2o4/edit?usp=drivesdk',
  },
  {
    title: 'Industrial Automation',
    image: '/Events/industrial-automation.jpeg',
    description:
      'Workshop is organized in collaboration with Siemens Centre of Excellence, MIT Campus, Anna University. This one-day workshop has two sessions. During the morning session, attendees will pay visit to SCoE labs and witness demonstrations. Then, they will be introduced to the Industrial Automation. During the afternoon session, attendees will have a hands-on session of TIA portal, ladder logic, PLC with HMI.',
    location: 'MIT',
    link: 'https://docs.google.com/forms/d/1rLXGdyoyWVjERSODAWimYkMBXdGKwTyTl6KXkJGELRc/edit?usp=drivesdk',
  },
];

const MitraEvent = [
  {
    title: 'All Terrain Robot',
    image: '/Events/all-terrain-robot.jpeg',
    description:
      "From rugged soil to challenging mud and pebble tracks. Navigate the unknown, adapt to the unpredictable, and blaze a trail to victory as you race towards the finish line. It's a high-octane adventure where only the most versatile vehicles claim glory in the realm of all-terrain racing! Rules: 1) Each team can have a maximum of 4 members. 2) Event consist of one time trial based round.",
    location: 'MIT',
    link: 'https://docs.google.com/forms/d/1O7Y-IjJXPB7-e2vwxdNQ5c6tkG9Z5D4fSg1M3C3Zs64/edit?usp=drivesdk',
  },
  {
    title: 'Robo Soccer',
    image: '/Events/robo-soccer.jpeg',
    description:
      'Enter the Arena of Futuristic Soccer supremacy! Command your remote-controlled/ wired or wireless robot, to dominate the specially designed robotic soccer battleground. Score big, strategize smart, and outmaneuver your opponents to clinch victory. Rules: 1)	Team can have maximum number of 3 members. 2) Only one participant should control the robot no player can be exchanged in the middle of match. 3)	A robot can push or hit the ball. It cannot withhold or grab the ball. 4)	Decision of the Judges and Event Organizers shall be treated as final and binding on all and cannot be contested. 5) Positions of balls and obstacles in the arena will be decided by the organizers on the particular day of event.',
    location: 'MIT',
    link: 'https://docs.google.com/forms/d/1CurfFySmoWm1-meZleqkqk_3piwIE9OT2C6ydux1sNU/edit?usp=drivesdk',
  },
];

const Events = () => {
  return (
    <section className='bg-white'>
      <div className='container mx-auto px-6 pb-12 pt-24'>
        <h1 className='text-center text-4xl font-extrabold capitalize text-gray-800 md:text-6xl lg:text-7xl'>
          Technical Events
        </h1>

        <div className='mx-auto mt-3 flex justify-center'>
          <span className='inline-block h-1 w-40 rounded-full bg-blue-500'></span>
          <span className='mx-1 inline-block h-1 w-3 rounded-full bg-blue-500'></span>
          <span className='inline-block h-1 w-1 rounded-full bg-blue-500'></span>
        </div>

        <p className='mx-auto mt-4 max-w-3xl text-center text-gray-500'>
          The following technical events are conducted as a part of Intecho
          2024. With over 30k worth of prizes and internship opportunities,
          these events are sure to bring out the best in you.
        </p>
      </div>

      <div className='container mx-auto flex max-w-7xl justify-center px-6 py-6'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {TechnicalEvents.map((event, index) => (
            <div
              key={index}
              className='w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg'
            >
              <Image
                className='w-full object-cover object-center'
                src={event.image}
                alt={event.title}
                priority
                width={1000}
                height={1000}
              />

              <div className='flex items-center bg-gray-900 px-6 py-3'>
                {/* <svg
                  aria-label='headphones icon'
                  className='h-6 w-6 fill-current text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z'
                  />
                </svg> */}

                <h1 className='mx-auto text-lg font-semibold text-white'>
                  Technical Event
                </h1>
              </div>

              <div className='px-6 py-4'>
                <h1 className='text-xl font-semibold text-gray-800'>
                  {event.title}
                </h1>

                <p className='py-2 text-gray-700'>
                  {event.description.substring(0, 100)}...
                </p>

                <div className='my-4 flex justify-between'>
                  <div className='flex items-center text-gray-700'>
                    <svg
                      aria-label='suitcase icon'
                      className='h-6 w-6 fill-current'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M14 11H10V13H14V11Z' />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z'
                      />
                    </svg>

                    <h1 className='px-2 text-sm'>Team Size: {event.team}</h1>
                  </div>

                  <div className='flex items-center text-gray-700'>
                    <svg
                      aria-label='location pin icon'
                      className='h-6 w-6 fill-current'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z'
                      />
                    </svg>

                    <h1 className='px-2 text-sm'>{event.location}</h1>
                  </div>
                </div>

                {/* <div className='mt-4 flex items-center text-gray-700'>
                  <svg
                    aria-label='email icon'
                    className='h-6 w-6 fill-current'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z'
                    />
                  </svg>

                  <h1 className='px-2 text-sm'>{event.contact}</h1>
                </div> */}
                <OnClickButton link={event.link} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container mx-auto px-6 pb-12 pt-24'>
        <h1 className='text-center text-4xl font-extrabold capitalize text-gray-800 md:text-6xl lg:text-7xl'>
          Workshop
        </h1>

        <div className='mx-auto mt-3 flex justify-center'>
          <span className='inline-block h-1 w-40 rounded-full bg-orange-500'></span>
          <span className='mx-1 inline-block h-1 w-3 rounded-full bg-orange-500'></span>
          <span className='inline-block h-1 w-1 rounded-full bg-orange-500'></span>
        </div>

        <p className='mx-auto mt-4 max-w-3xl text-center text-gray-500'>
          The following Workshops are conducted by Industry Experts and offered
          by Siemens Centre of Excellence.
        </p>
      </div>

      <div className='container mx-auto flex max-w-7xl justify-center px-6 py-6'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {Workshop.map((event, index) => (
            <div
              key={index}
              className='w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg'
            >
              <Image
                className='w-full object-cover object-center'
                src={event.image}
                alt={event.title}
                priority
                width={1000}
                height={1000}
              />

              <div className='flex items-center bg-gray-900 px-6 py-3'>
                <h1 className='mx-auto text-lg font-semibold text-white'>
                  Workshop
                </h1>
              </div>

              <div className='px-6 py-4'>
                <h1 className='text-xl font-semibold text-gray-800'>
                  {event.title}
                </h1>

                <p className='py-2 text-gray-700'>
                  {event.description.substring(0, 100)}...
                </p>

                <div className='my-4 flex justify-between'>
                  <div className='flex items-center text-gray-700'>
                    <svg
                      aria-label='location pin icon'
                      className='h-6 w-6 fill-current'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z'
                      />
                    </svg>

                    <h1 className='px-2 text-sm'>{event.location}</h1>
                  </div>
                </div>
                <OnClickButton link={event.link} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container mx-auto px-6 pb-12 pt-24'>
        <h1 className='text-center text-4xl font-extrabold capitalize text-gray-800 md:text-6xl lg:text-7xl'>
          Mitra Events
        </h1>

        <div className='mx-auto mt-3 flex justify-center'>
          <span className='inline-block h-1 w-40 rounded-full bg-green-500'></span>
          <span className='mx-1 inline-block h-1 w-3 rounded-full bg-green-500'></span>
          <span className='inline-block h-1 w-1 rounded-full bg-green-500'></span>
        </div>

        {/* <p className='mx-auto mt-4 max-w-3xl text-center text-gray-500'></p> */}
      </div>

      <div className='container mx-auto flex max-w-7xl justify-center px-6 py-6'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {MitraEvent.map((event, index) => (
            <div
              key={index}
              className='w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg'
            >
              <Image
                className='w-full object-cover object-center'
                src={event.image}
                alt={event.title}
                priority
                width={1000}
                height={1000}
              />

              <div className='flex items-center bg-gray-900 px-6 py-3'>
                <h1 className='mx-auto text-lg font-semibold text-white'>
                  MITRA
                </h1>
              </div>

              <div className='px-6 py-4'>
                <h1 className='text-xl font-semibold text-gray-800'>
                  {event.title}
                </h1>

                <p className='py-2 text-gray-700'>
                  {event.description.substring(0, 100)}...
                </p>

                <div className='my-4 flex justify-between'>
                  <div className='flex items-center text-gray-700'>
                    <svg
                      aria-label='location pin icon'
                      className='h-6 w-6 fill-current'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z'
                      />
                    </svg>

                    <h1 className='px-2 text-sm'>{event.location}</h1>
                  </div>
                </div>
                <OnClickButton link={event.link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
