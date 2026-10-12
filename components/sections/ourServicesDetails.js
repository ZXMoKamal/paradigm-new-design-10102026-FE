// import React from 'react'
// import { SectionHeader } from '../shared/sectionHeader'
// import ArrowRight from '../icons/arrowRight'
// import LinkButton from '../shared/linkButton'
// import ServicesGrid from '../shared/servicesGrid'

// function OurServicesDetails() {
//   return (

//         <section className="m-auto max-w-[1300px] flex flex-col gap-8 max-2xl:px-10 max-sm:px-5 lg:pb-30 pt-20 pb-20">
//             <SectionHeader subtitle="OUR SERVICES" 
//             title="Take a Look" description="Paradigm Capital Group offers a comprehensive range of services that support event management solutions, ensuring your event is expertly handled from A to Z."
//             titleTag="h3"
//             subtitleTag="h2"
//             buttons={
//             <LinkButton
//                         href="/our-services/"
//                         variant={ "outline" }
//                         size='md'
//                         className={'max-lg:px-5 max-lg:my-5 max-sm:text-sm'}
//                         icon={ <ArrowRight className='w-5 h-5 fill-text-priamry' /> }
//                         iconPosition='right'
//                     >
//                         Detailed Services
//                     </LinkButton>
//             }/>

//       <section className="grid grid-cols-1 xl:grid-cols-[28%_72%] gap-0">
//           <section></section>
//           <section>

// <ServicesGrid
//   services={[
//   {
//     name: 'Event Consultancy & Management',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"/></svg>,
//     href: '/services/event-planning',
//   },
//   {
//     name: 'Public Relations & VIP Management',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>,
//     href: '/services/brand',
//   },
//   {
//     name: 'Audio Visual Solutions',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M533.6 96.5C523.3 88.1 508.2 89.7 499.8 100C491.4 110.3 493 125.4 503.3 133.8C557.5 177.8 592 244.8 592 320C592 395.2 557.5 462.2 503.3 506.3C493 514.7 491.5 529.8 499.8 540.1C508.1 550.4 523.3 551.9 533.6 543.6C598.5 490.7 640 410.2 640 320C640 229.8 598.5 149.2 533.6 96.5zM473.1 171C462.8 162.6 447.7 164.2 439.3 174.5C430.9 184.8 432.5 199.9 442.8 208.3C475.3 234.7 496 274.9 496 320C496 365.1 475.3 405.3 442.8 431.8C432.5 440.2 431 455.3 439.3 465.6C447.6 475.9 462.8 477.4 473.1 469.1C516.3 433.9 544 380.2 544 320.1C544 260 516.3 206.3 473.1 171.1zM412.6 245.5C402.3 237.1 387.2 238.7 378.8 249C370.4 259.3 372 274.4 382.3 282.8C393.1 291.6 400 305 400 320C400 335 393.1 348.4 382.3 357.3C372 365.7 370.5 380.8 378.8 391.1C387.1 401.4 402.3 402.9 412.6 394.6C434.1 376.9 448 350.1 448 320C448 289.9 434.1 263.1 412.6 245.5zM80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416z"/></svg>,
//     href: '/services/corporate',
//   },
//     {
//     name: 'Interpretation & Translation Services',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>,
//     href: '/services/event-planning',
//   },
//   {
//     name: 'Technical Support',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"/></svg>,
//     href: '/services/brand',
//   },
//   {
//     name: 'Documentation & Media Production',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z"/></svg>,
//     href: '/services/corporate',
//   },
//     {
//     name: 'Travel, Transportation & Accommodation',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M199.2 181.4L173.1 256L466.9 256L440.8 181.4C436.3 168.6 424.2 160 410.6 160L229.4 160C215.8 160 203.7 168.6 199.2 181.4zM103.6 260.8L138.8 160.3C152.3 121.8 188.6 96 229.4 96L410.6 96C451.4 96 487.7 121.8 501.2 160.3L536.4 260.8C559.6 270.4 576 293.3 576 320L576 512C576 529.7 561.7 544 544 544L512 544C494.3 544 480 529.7 480 512L480 480L160 480L160 512C160 529.7 145.7 544 128 544L96 544C78.3 544 64 529.7 64 512L64 320C64 293.3 80.4 270.4 103.6 260.8zM192 368C192 350.3 177.7 336 160 336C142.3 336 128 350.3 128 368C128 385.7 142.3 400 160 400C177.7 400 192 385.7 192 368zM480 400C497.7 400 512 385.7 512 368C512 350.3 497.7 336 480 336C462.3 336 448 350.3 448 368C448 385.7 462.3 400 480 400z"/></svg>,
//     href: '/services/event-planning',
//   },
//   {
//     name: 'Graphic Design',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M296 200L296 152L344 152L344 200L296 200zM288 96C261.5 96 240 117.5 240 144L240 148L121.6 148C111.2 126.7 89.3 112 64 112C28.7 112 0 140.7 0 176C0 211.3 28.7 240 64 240C89.3 240 111.2 225.3 121.6 204L188.5 204C129.6 243.6 89.6 309 84.5 384L80 384C53.5 384 32 405.5 32 432L32 496C32 522.5 53.5 544 80 544L144 544C170.5 544 192 522.5 192 496L192 432C192 405.5 170.5 384 144 384L140.7 384C146.6 317 189.2 260.6 248.2 234.9C256.8 247.6 271.4 256 288 256L352 256C368.6 256 383.1 247.6 391.8 234.9C450.8 260.6 493.4 317 499.3 384L496 384C469.5 384 448 405.5 448 432L448 496C448 522.5 469.5 544 496 544L560 544C586.5 544 608 522.5 608 496L608 432C608 405.5 586.5 384 560 384L555.5 384C550.5 309 510.4 243.6 451.5 204L518.4 204C528.8 225.3 550.7 240 576 240C611.3 240 640 211.3 640 176C640 140.7 611.3 112 576 112C550.7 112 528.8 126.7 518.4 148L400 148L400 144C400 117.5 378.5 96 352 96L288 96zM88 440L136 440L136 488L88 488L88 440zM504 488L504 440L552 440L552 488L504 488z"/></svg>,
//     href: '/services/brand',
//   },
//   {
//     name: 'Branding, Production & Printing',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 320C112 205.1 205.1 112 320 112C383.1 112 439.6 140.1 477.8 184.5C486.4 194.6 501.6 195.7 511.6 187.1C521.6 178.5 522.8 163.3 514.2 153.3C467.3 98.6 397.7 64 320 64C178.6 64 64 178.6 64 320L64 360C64 373.3 74.7 384 88 384C101.3 384 112 373.3 112 360L112 320zM570.5 267.1C567.8 254.1 555 245.8 542.1 248.6C529.2 251.4 520.8 264.1 523.6 277C526.5 290.9 528.1 305.3 528.1 320.1L528.1 360.1C528.1 373.4 538.8 384.1 552.1 384.1C565.4 384.1 576.1 373.4 576.1 360.1L576.1 320.1C576.1 302 574.2 284.3 570.6 267.2zM320 144C301 144 282.6 147 265.5 152.6C250.3 157.6 246.8 176.3 257.2 188.5C264.3 196.8 276 199.3 286.6 196.4C297.2 193.5 308.4 192 320 192C390.7 192 448 249.3 448 320L448 344.9C448 370.1 446.5 395.2 443.6 420.2C441.9 434.8 453 448 467.8 448C479.6 448 489.7 439.4 491.1 427.7C494.4 400.3 496.1 372.7 496.1 345L496.1 320.1C496.1 222.9 417.3 144.1 320.1 144.1zM214.7 212.7C205.6 202.1 189.4 201.3 180.8 212.3C157.7 242.1 144 279.4 144 320L144 344.9C144 369.1 141.4 393.3 136.2 416.8C132.8 432.4 144.1 447.9 160.1 447.9C170.6 447.9 180 440.9 182.3 430.6C188.7 402.5 192 373.8 192 344.8L192 319.9C192 292.7 200.5 267.5 214.9 246.8C222.1 236.4 222.9 222.2 214.7 212.6zM320 224C267 224 224 267 224 320L224 344.9C224 380.8 219.4 416.4 210.2 451C206.4 465.3 216.9 480 231.7 480C241.2 480 249.6 473.8 252.1 464.6C262.6 425.6 268 385.4 268 344.9L268 320C268 291.3 291.3 268 320 268C348.7 268 372 291.3 372 320L372 344.9C372 381.2 368.5 417.3 361.6 452.8C358.9 466.7 369.3 480 383.4 480C393.6 480 402.4 473 404.4 463C412.1 424.2 416 384.7 416 344.9L416 320C416 267 373 224 320 224zM344 320C344 306.7 333.3 296 320 296C306.7 296 296 306.7 296 320L296 344.9C296 404.8 285 464.2 263.5 520.1L257.6 535.4C252.8 547.8 259 561.7 271.4 566.4C283.8 571.1 297.7 565 302.4 552.6L308.3 537.3C331.9 475.9 344 410.7 344 344.9L344 320z"/></svg>,
//     href: '/services/corporate',
//   },
//     {
//     name: 'Catering',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z"/></svg>,
//     href: '/services/event-planning',
//   },
//   {
//     name: 'Equipment',
//     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 160C224 107 267 64 320 64C370.3 64 411.6 102.7 415.7 152L360 152C346.7 152 336 162.7 336 176C336 189.3 346.7 200 360 200L416 200L416 248L360 248C346.7 248 336 258.7 336 272C336 285.3 346.7 296 360 296L415.7 296C411.6 345.3 370.4 384 320 384C267 384 224 341 224 288L224 160zM152 224C165.3 224 176 234.7 176 248L176 288C176 367.5 240.5 432 320 432C399.5 432 464 367.5 464 288L464 248C464 234.7 474.7 224 488 224C501.3 224 512 234.7 512 248L512 288C512 385.9 438.7 466.7 344 478.5L344 528L392 528C405.3 528 416 538.7 416 552C416 565.3 405.3 576 392 576L248 576C234.7 576 224 565.3 224 552C224 538.7 234.7 528 248 528L296 528L296 478.5C201.3 466.7 128 385.9 128 288L128 248C128 234.7 138.7 224 152 224z"/></svg>,
//     href: '/services/brand',
//   }
// ]}
  
//   nameTag="h3"
// />

//           </section>
//           </section>



//         </section>
   
//   )
// }

// export default OurServicesDetails




import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "UI/UX & Web Design",
      description: "Crafting immersive, intuitive user interfaces and digital experiences that engage audiences and drive conversions.",
      icon: "🎨",
      href: "/service-details",
    },
    {
      id: "02",
      title: "Frontend & Next.js Development",
      description: "Building lightning-fast, high-performance web applications using modern frameworks like React and Next.js.",
      icon: "⚡",
      href: "/service-details",
    },
    {
      id: "03",
      title: "Brand Strategy & Identity",
      description: "Developing memorable brand stories, logos, and guidelines that make your business stand out globally.",
      icon: "🚀",
      href: "/service-details",
    },
    {
      id: "04",
      title: "Digital Marketing & SEO",
      description: "Optimizing your online visibility and executing campaigns that attract high-value traffic and loyal customers.",
      icon: "📈",
      href: "/service-details",
    },
    {
      id: "01",
      title: "UI/UX & Web Design",
      description: "Crafting immersive, intuitive user interfaces and digital experiences that engage audiences and drive conversions.",
      icon: "🎨",
      href: "/service-details",
    },
    {
      id: "02",
      title: "Frontend & Next.js Development",
      description: "Building lightning-fast, high-performance web applications using modern frameworks like React and Next.js.",
      icon: "⚡",
      href: "/service-details",
    },
    {
      id: "03",
      title: "Brand Strategy & Identity",
      description: "Developing memorable brand stories, logos, and guidelines that make your business stand out globally.",
      icon: "🚀",
      href: "/service-details",
    },
    {
      id: "04",
      title: "Digital Marketing & SEO",
      description: "Optimizing your online visibility and executing campaigns that attract high-value traffic and loyal customers.",
      icon: "📈",
      href: "/service-details",
    },
    {
      id: "01",
      title: "UI/UX & Web Design",
      description: "Crafting immersive, intuitive user interfaces and digital experiences that engage audiences and drive conversions.",
      icon: "🎨",
      href: "/service-details",
    },
    {
      id: "02",
      title: "Frontend & Next.js Development",
      description: "Building lightning-fast, high-performance web applications using modern frameworks like React and Next.js.",
      icon: "⚡",
      href: "/service-details",
    },
    {
      id: "03",
      title: "Brand Strategy & Identity",
      description: "Developing memorable brand stories, logos, and guidelines that make your business stand out globally.",
      icon: "🚀",
      href: "/service-details",
    },
    {
      id: "04",
      title: "Digital Marketing & SEO",
      description: "Optimizing your online visibility and executing campaigns that attract high-value traffic and loyal customers.",
      icon: "📈",
      href: "/service-details",
    },
  ];

  return (
    <section className="py-24 bg-bg-1 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-5 right-5 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-2 left-100 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-content relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up" data-aos-duration="800">
          <div className="space-y-4 max-w-xl">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-2 border border-border-1 text-primary text-xs font-heading font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Our Core Services
            </div> */}
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  Our Core Services
                </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-tight">
              High-End Solutions Tailored For Your <span className="text-primary">Business</span>
            </h2>
          </div>
          <div>
            {/* <Link href="/service" className="btn-outline">
              View All Services
              <span className="icon-placeholder inline-block w-4 h-4 bg-primary/20 rounded ml-2" />
            </Link> */}
            <Link
                    href="/about/"
                    className="group inline-flex items-center gap-4 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-bg-1 transition-all duration-300 hover:bg-primary-dark hover:shadow-brand"
                  >
                    <span>Discover More</span>

                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-primary transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-duration={600 + index * 100}
            >
              {/* Top Accent Glow on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-6">
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-heading font-bold text-text-muted tracking-wider">
                    {service.id}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-bg-1 border border-border-1 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-bg-1 transition-colors duration-300">
                    <span className="icon-placeholder">{service.icon}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Read More Link Arrow */}
              <div className="pt-8 mt-8 border-t border-border-1 flex items-center justify-between">
                <Link
                  href={service.href}
                  className="text-xs font-heading font-semibold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2"
                >
                  Explore Details
                  <span className="icon-placeholder w-2 h-2 border-t-2 border-r-2 border-current rotate-45 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}