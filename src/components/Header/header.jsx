import Style from "./header.module.css";
import { useState, useEffect } from "react";
// import logo from "../../images/icons/brand-logo.png"
// import vector from "../../images/Vector.png"
// import Menu from './menudropdown/menu';
// import downimg from "../../images/icons/Vector.svg"
import Platform from "./menudropdown/platform";
import Company from "./menudropdown/company";
import Solutions from "./menudropdown/solutions";
import Products from "./menudropdown/products";
import Firstview from "./mobiledropdown/firstview";
import images from "../../constants/images";
import Services from "./menudropdown/service";
import Img from "../Image";
import { useLocation   } from "react-router-dom";
// import Contact from '../../pages/contact';
// import MobiusLogo from '../images/brand-logo.svg'
// import Arrow from '../images/icons/loginarrow.png'
// import Menu from "../images/icons/menu.svg"
// import CloseOutline from "../images/icons/close-outline.svg"
function Header() {
  let location = useLocation();
  console.log(location)
  const data = [
    {
      name: "solutions",
      menus: [
        {
          name: "EXPERTISE by industry",
          items: [
            {
              name: "Government & Public Sector",
              subitems: [
                {
                  name: "offerings",
                  items: [
                    {
                      name: "Smart City as a Service",
                      content: {
                        heading: "Smart Cities",
                        description:
                          "With Smart City as a Service, you can leverage the power of Nexus Connect to unlock the full potential of your city's infrastructure and resources, creating a thriving ecosystem that drives innovation and growth. ",
                        url: "/solutions/smart-city-as-a-service",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/smart.jpg",
                      },
                    },
                    {
                      name: "Citizen Engagement",
                      content: {
                        heading: "Citizen Engagement",
                        description:
                          "By facilitating real-time communication and data-driven decision-making, Mobius Citizen Engagement Services empower local governments and NexGen TV broadcasters to drive positive change and foster thriving communities.",
                        url: "/solutions/citizen-engagement",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/citizen.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Government & Public Sector",
                description:
                  "Mobius Networks offers transformative NoCode solutions designed to empower government agencies and public sector organizations to tackle pressing challenges with unparalleled efficiency, flexibility, and security. Our customizable platform enables the rapid development and deployment of user-friendly digital applications and services, streamlining processes, and promoting transparency while reducing operational costs and complexities.",
                url: "/solutions/smart-city-as-a-service",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/1.jpg",
              },
            },
            {
              name: "Private 5G & Telco",
              subitems: [
                {
                  name: "private / offerings",
                  items: [
                    {
                      name: "5G Network Orchestration",
                      content: {
                        heading: "5G Network Orchestration",
                        description:
                          "Nexus Connect's private 5G network implementation empowers businesses to drive innovation and create value. With low-code tools, businesses can build apps for a 5G marketplace that offers connectivity as a service, enabling growth, remote monitoring, tracking, and safety. Mobius enables collaboration and value creation for stakeholders. ",
                        url: "/solutions/5g-network-orchestration",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/5g.jpg",
                      },
                    },
                    {
                      name: "Private 5G",
                      content: {
                        heading: "Private 5G",
                        description:
                          "Transform your business with Nexus Connect-powered Private 5G Network solutions. Our low-code platform enables rapid development and deployment of custom applications, and our automated network tools reduce costs and enhance efficiency. Experience the full potential of 5G technology with our smart connectivity solutions. ",
                        url: "/solutions/private-5G",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/5g.jpg",
                      },
                    },
                    {
                      name: "5G Marketplaces",
                      content: {
                        heading: "5G Marketplaces",
                        description:
                          "Mobius 5G Marketplace Solution is a collaborative ecosystem that enables businesses to leverage 5G technology and smart infrastructure for innovation and growth. ",
                        url: "/comingsoon",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/5g.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Private 5G & Telco",
                description:
                  "Mobius Networks provides cutting-edge NoCode solutions tailored to the dynamic needs of the telecom industry, enabling companies to innovate, adapt, and excel in an ever-evolving digital landscape. Our powerful and intuitive platform empowers telecom providers to design and deploy bespoke digital applications and services, streamlining operations, enhancing customer experience, and driving revenue growth.",
                url: "/comingsoon",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/2.jpg",
              },
            },
            {
              name: "Media & Entertainment",
              subitems: [
                {
                  name: "Media / offerings",
                  items: [
                    {
                      name: "NextGen TV",
                      content: {
                        heading: "NextGen TV",
                        description:
                          "Empowering NextGen TV broadcasters with Mobius' low-code platform to create immersive viewing experiences. Deploy applications and services faster than ever before, creating new value and driving innovation across the industry. Stay ahead of the competition with Mobius. ",
                        url: "/solutions/NextGen-TV",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/1.jpg",
                      },
                    },
                    {
                      name: "OTT Platforms",
                      content: {
                        heading: "OTT Platforms",
                        description:
                          "Our OTT Platform Solution provides a scalable, personalized, and comprehensive video streaming infrastructure that allows content owners to monetize their content efficiently while providing viewers with an immersive viewing experience.",
                        url: "/comingsoon",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/ott.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Media & Entertainment",
                description:
                  "Mobius Networks delivers innovative NoCode solutions for the media and entertainment industry, empowering creators, producers, and distributors to craft immersive, interactive experiences that captivate audiences across the globe. Our versatile platform simplifies the development and deployment of tailor-made digital applications and services, streamlining content management, distribution, and monetization.",
                url: "/comingsoon",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/3.jpg",
              },
            },
            {
              name: "Health & Wellness",
              subitems: [
                {
                  name: "Health / offerings",
                  items: [
                    {
                      name: "Antara",
                      content: {
                        heading: "Antara",
                        description:
                          "Antara is a platform that empowers you to unlock the power of your inner spirit towards true happiness. With a focus on the human spirit, Antara leverages advanced human-computer interaction and multimodal interfaces to provide a highly personalized and engaging user experience. With the integration of Vedanta as an additional school of wisdom, Antara offers users a deep understanding of the nature of reality and the purpose of existence",
                        url: "/solutions/antara-solutions",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Health & Wellness",
                description:
                  "Mobius Networks delivers game-changing NoCode solutions for the health and wellness industry, enabling healthcare providers, fitness centers, and wellness companies to revolutionize the way they engage with their clients and deliver services. Our user-friendly platform simplifies the creation and implementation of bespoke digital applications, streamlining patient care, appointment scheduling, and personalized wellness plans.",
                url: "/comingsoon",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/4.jpg",
              },
            },
            {
              name: "Miscellaneous",
              subitems: [
                {
                  name: "Miscellaneous",
                  items: [
                    {
                      name: "ESOPsaaS",
                      content: {
                        heading: "ESOPsaaS",
                        description:
                          "OpsMax is a powerful platform that enables small and medium enterprises, including startups, to launch and manage their employee stock option plans (ESOPs) quickly and efficiently. The platform simplifies the ESOPs process with an intuitive interface that walks the company through the process step by step, making it easy to understand and manage.",
                        url: "/solutions/ESOPsaaS",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                    {
                      name: "Aegis",
                      content: {
                        heading: "Aegis",
                        description:
                          "The Aegis MISS harnesses the power of NexGen TV technology and Nexus Connect tools to provide real-time alerts and critical information to Aegiss in emergency situations. This innovative solution enhances communication efficiency, enables rapid response, and improves overall emergency management capabilities.",
                        url: "/solutions/first-responder-alerting",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                    {
                      name: "Around",
                      content: {
                        heading: "Around",
                        description:
                          "The Around service  proved to be a valuable tool for emergency responders. The mapping software company worked with local emergency services to integrate their data into the Around, allowing Aegiss to quickly and easily access important information about accidents and emergencies.",
                        url: "/solutions/live-maps",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                    {
                      name: "CX MISS",
                      content: {
                        heading: "CX MISS",
                        description:
                          "CX MISS (Mobius Intelligent Solution Suite) is a powerful suite of Mobius Intelligent Applications (MIA's) designed to transform customer experience (CX) and drive customer-centricity across all touchpoints.",
                        url: "/solutions/cx",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                    {
                      name: "Mobius Enterprise Solution Suite",
                      content: {
                        heading: "Mobius Enterprise Solution Suite",
                        description:
                          "MoScribe is a powerful Subscription Management as a Service solution, offered as a Mobius Solution Suite. It combines three Mobius Intelligent Applications (MIAs) - powered by the Nexus Connect platform - to streamline and automate subscription management processes for SaaS applications.",
                        url: "/solutions/modern-enterprise-solution-suite",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                    {
                      name: "Website Modernisation",
                      content: {
                        heading: "Website Modernisation",
                        description:
                          "The WebSite Modernization MISS (Mobius Intelligent Solution Suite) revolutionizes the way organizations build and maintain websites by leveraging Nexus Connect and its suite of five low-code tools.",
                        url: "/solutions/web-modernization",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                    {
                      name: "Cloud Data Orchestration",
                      content: {
                        heading: "Cloud Data Orchestration",
                        description:
                          "Cloud Data Orchestration (CDO) refers to the management and coordination of data workflows and processes in cloud-based environments. It involves the seamless integration, movement, and transformation of data across different cloud platforms and services.",
                        url: "/solutions/cloud-data-orchestration",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/health.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Health & Wellness",
                description:
                  "Mobius Networks delivers game-changing NoCode solutions for the health and wellness industry, enabling healthcare providers, fitness centers, and wellness companies to revolutionize the way they engage with their clients and deliver services. Our user-friendly platform simplifies the creation and implementation of bespoke digital applications, streamlining patient care, appointment scheduling, and personalized wellness plans.",
                url: "/comingsoon",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/4.jpg",
              },
            },
          ],
        },
        {
          name: "Expertise By Business Function",
          items: [
            {
              name: "HR & People Tech",
              subitems: [
                {
                  name: "HR / offerings",
                  items: [
                    {
                      name: "Smart Recruiting",
                      content: {
                        heading: "Smart Recruiting",
                        description:
                          "All-in-one HR solution that streamlines talent acquisition, employee engagement, learning & development, compensation & benefits, and employer branding workflows.",
                        url: "/products/recruiting",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/recruiting.jpg",
                      },
                    },
                    {
                      name: "Employee Delight",
                      content: {
                        heading: "Employee Delight",
                        description:
                          "Mobius offer an AI-driven HR Tech solution designed to elevate employee experience by streamlining HR processes and providing personalized employee engagement. With innovative features such as sentiment analysis, personalized career pathing, and rewards and recognition programs, our solutions empowers organizations to attract, retain, and engage top talent. Employee Delight is the all-in-one solution for organizations looking to create a positive and engaging work culture. ",
                        url: "/products/employee-engagement",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/employeeDel.jpg",
                      },
                    },
                    {
                      name: "Org. Modelling ",
                      content: {
                        heading: "Org. Modelling ",
                        description:
                          "Visualize, optimize, and transform your organization with ease using our intuitive platform. Boost productivity, drive innovation, and stay ahead of the competition with Modulus. ",
                        url: "/products/orgdev-and-planning",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/employeeDel.jpg",
                      },
                    },
                    {
                      name: "Learning & Development",
                      content: {
                        heading: "Learning & Development",
                        description:
                          " Quickly launch a range of training programs, create customized learning paths, and track employee progress, all in one place. Enhance employee engagement, satisfaction, and retention. ",
                        url: "/products/learning-and-development",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/learningDevelopment.jpg",
                      },
                    },
                    {
                      name: "Comp & Benefits",
                      content: {
                        heading: "Comp & Benefits",
                        description:
                          "Comp & Benefits offer a groundbreaking HR Tech solution that revolutionizes employee compensation and benefits management. Our AI-based platform provides end-to-end solutions to help organizations streamline and optimize their compensation and benefits programs. With our solution, organizations can create personalized compensation plans, design and manage benefits programs, and gain powerful insights into compensation data, all in real-time. Say goodbye to outdated compensation and benefits management practices and embrace the future with Mobius. ",
                        url: "/products/comp-and-benifits",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/companyBenefits.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "HR & People Tech",
                description:
                  "Mobius Networks offers groundbreaking NoCode solutions for the HR and People Tech industry, empowering organizations to optimize talent acquisition, management, and development through the power of digital transformation. Our intuitive platform enables the seamless creation and deployment of custom applications, streamlining crucial processes such as recruitment, onboarding, performance evaluation, and employee engagement.",
                url: "/solutions/nightingale",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/companyBenefits.jpg",
              },
            },
            {
              name: "IT Automation",
              subitems: [
                {
                  name: "IT / offerings",
                  items: [
                    {
                      name: "Run-Run",
                      content: {
                        heading: "Run-Run",
                        description:
                          "Mobius automated DevOps empowers your IT operations with the latest in automated DevOps. With tools for monitoring, app development, engagement, and collaboration, it helps modern enterprises deliver high-quality IT services and unlock new opportunities.",
                        url: "/solutions/runrun",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/It.jpg",
                      },
                    },
                    {
                      name: "Data governance as a service",
                      content: {
                        heading: "Data governance as a service",
                        description:
                          "Data Governance as a Service (DGaaS) powered by Nexus Connect is a comprehensive solution that enables organizations to establish effective data governance practices. DGaaS combines five Mobius Intelligent Applications (MIAs) - Data Quality Sentinel, Master Data Nexus, Data Modeling Studio, Data Storage Hub, Data Security Fort, Meta Data Tracker, Data Warehousing & BI Center - built on the Nexus Connect platform.",
                        url: "/solutions/data-governance-as-a-service",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/It.jpg",
                      },
                    },
                    {
                      name: "Data intelligence platform",
                      content: {
                        heading: "Data intelligence platform",
                        description:
                          " Mobius automated DevOps empowers your IT operations with the latest in automated DevOps. With tools for monitoring, app development, engagement, and collaboration, it helps modern enterprises deliver high-quality IT services and unlock new opportunities. ",
                        url: "/comingsoon",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/It.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "IT Automation",
                description:
                  "Mobius Networks provides advanced NoCode solutions for the IT Automation and DevOps industry, empowering businesses to streamline processes, enhance collaboration, and accelerate innovation. Our intuitive platform enables the rapid design and deployment of customized applications and tools, eliminating the need for coding expertise and fostering seamless integration with existing systems.",
                url: "/comingsoon",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/8.jpg",
              },
            },
            {
              name: "Enterprise CX",
              subitems: [
                {
                  name: "Enterprise CX",
                  items: [
                    {
                      name: "Moscribe",
                      content: {
                        heading: "Moscribe",
                        description:
                          "MoScribe is a powerful Subscription Management as a Service solution, offered as a Mobius Solution Suite. It combines three Mobius Intelligent Applications (MIAs) - powered by the Nexus Connect platform - to streamline and automate subscription management processes for SaaS applications.",
                        url: "/solutions/moScribe",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/It.jpg",
                      },
                    },
                    {
                      name: "Marketing Automation",
                      content: {
                        heading: "Marketing Automation",
                        description:
                          "Marketing Automation as a Service (MAaaS) powered by Nexus Connect is a comprehensive solution that enables organizations to streamline and optimize their marketing processes. MAaaS combines several Mobius Intelligent Applications (MIAs), each designed to address specific marketing automation functions. ",
                        url: "/solutions/marketing-automation-as-a-service",
                        coverImage: "/aidtaasImages/images/imagesnew/navbar/It.jpg",
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Enterprise CX",
                description:
                  "CX MISS (Mobius Intelligent Solution Suite) is a powerful suite of Mobius Intelligent Applications (MIA's) designed to transform customer experience (CX) and drive customer-centricity across all touchpoints. ",
                url: "/comingsoon",
                coverImage: "/aidtaasImages/images/imagesnew/navbar/8.jpg",
              },
            },
          ],
        },
      ],
    },
    {
      name: "Products",
      menus: [
        {
          name: "Delights",
          items: [
            {
              name: "Customers",
              subitems: [
                {
                  name: "offerings",
                  items: [
                    {
                      name: "Customer Data Platform",
                      subitems: [
                        {
                          name: "Data Lake As a Service",
                          content: {
                            heading: "Data Lake As a Service",
                            description:
                              "PI is designed to offer a comprehensive set of tools for achieving end-to-end data visibility for your enterprise. Starting with Data Lake build and manage tools, PI also provides analytics tools to derive insights and map those insights to actionable serving layer engagements.  ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Insights As a Service",
                          content: {
                            heading: "Insights As a Service",
                            description:
                              "Insights as a Service is a powerful analytics platform that transforms raw customer data into actionable insights. By leveraging advanced algorithms and machine learning techniques, it analyzes customer behavior, preferences, and trends to uncover valuable insights that drive data-informed decision-making. ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Dashboard As a Service",
                          content: {
                            heading: "Dashboard As a Service",
                            description:
                              "Mobius ImpressIO provides powerful data visualization tools that enable organizations to monitor and analyze their data in real-time.  ",
                            url: "/products/ImpressIO",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Customer Data Platform",
                        description:
                          "The Customer Data Platform (CDP) built on Nexus Connect is an innovative, end-to-end solution that harnesses the power of Mobius Tools to provide businesses with a competitive and differentiated way to manage, analyze, and utilize customer data effectively ",
                        url: "/products/customer-data-platform",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Customer Relationship Management",
                      subitems: [
                        {
                          name: "Chat Bot",
                          content: {
                            heading: "Chat Bot",
                            description:
                              "ChatBot is an advanced AI-powered virtual assistant designed to revolutionize customer interactions and support.Using natural language processing and machine learning algorithms, ChatBot understands customer queries and provides real-time responses, simulating human-like conversations. ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Zoom Bot Pro",
                          content: {
                            heading: "Zoom Bot Pro",
                            description:
                              "ZoomBot Pro is a powerful and innovative SaaS application built on top of the Nexus Connect Low Code Platform. It is designed to help businesses using the Zoom Communications. ",
                            url: "/products/zoombot-pro",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Customer Communications",
                          content: {
                            heading: "Customer communications",
                            description:
                              "Powering the future of customer engagement with our AI-driven and privacy-first Customer Data Platform built using Mobius DTasS tools. ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Customer Relationship Management",
                        description:
                          " The Customer Relationship Management (CRM) solution built on Nexus Connect is an advanced, comprehensive platform that leverages the power of Mobius Tools - PI, BoB, Monet, Vinci, and HolaVerse - to create a competitive and differentiated CRM solution.",
                        url: "/products/customer-relationship-management",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Customer Success Management",
                      subitems: [
                        {
                          name: "Process Modelling",
                          content: {
                            heading: "Process Modelling",
                            description:
                              "Powering the future of customer engagement with our AI-driven and privacy-first Customer Data Platform built using Mobius DTasS tools. ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Help Desk",
                          content: {
                            heading: "Help Desk",
                            description:
                              "Help Desk is a comprehensive customer support solution that streamlines ticket management and issue resolution. It enables businesses to centralize customer inquiries, assign tickets to the right teams, and track their status in real-time.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Scheduling",
                          content: {
                            heading: "Scheduling",
                            description:
                              "Calendar Scheduling is an intelligent appointment management tool that simplifies scheduling and improves operational efficiency. With an intuitive interface, it enables customers to easily book appointments, while businesses can efficiently manage their schedules.  ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Customer Success Management",
                        description:
                          "The Customer Success Management (CSM) solution built on Nexus Connect is a comprehensive, data-driven platform that utilizes the power of Mobius Tools - PI, BoB, Monet, Vinci, and HolaVerse - to create a competitive and differentiated CSM solution. ",
                        url: "/products/customer-success-management",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Marketing Automation",
                      subitems: [
                        {
                          name: "Omni-Channel Engagements",
                          content: {
                            heading: "Omni-Channel Engagements",
                            description:
                              "Vinci's platform enables you to build real-time networks and create powerful microapps that connect you with your customers, employees, and partners like never before. Drive business success with Vinci's real-time engagement solution.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Social Media Automation",
                          content: {
                            heading: "Social Media Automation",
                            description:
                              "Automate your marketing campaigns across multiple channels with Mobius Marketing Automation. Our AI-powered targeting and predictive analytics will help you reach your customers with personalized messages and identify new opportunities.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Marketing Automation",
                        description:
                          "Automate your marketing campaigns across multiple channels with Mobius Marketing Automation. Our AI-powered targeting and predictive analytics will help you reach your customers with personalized messages and identify new opportunities. ",
                        url: "/products/marketing-automation",
                        coverImage: images.Navbar9,
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Customers",
                description:
                  "Mobius Networks offers an array of NoCode solutions designed to help businesses effectively manage customer data, streamline customer interactions, and drive growth through enhanced relationships. Our platform empowers organizations to create and deploy customized data management applications without coding expertise, ensuring seamless integration with existing systems and processes.",
                url: "/products",
                coverImage: images.Navbar9,
              },
            },
            {
              name: "Employees",
              subitems: [
                {
                  name: "Employees",
                  items: [
                    {
                      name: "Recruiting",
                      subitems: [
                        {
                          name: "Resume Processing",
                          content: {
                            heading: "Resume Processsing",
                            description:
                              "The Resume Processing MIA within the Nightingale MISS is designed to streamline and automate the screening and processing of resumes. It leverages advanced algorithms and natural language processing techniques to efficiently analyze resumes and identify qualified candidates for job openings.",
                            url: "/products/resume-processing",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Interview Experience",
                          content: {
                            heading: "Interview Experience",
                            description:
                              "The Interview Experience MIA within the Nightingale MISS aims to enhance the candidate interview process and provide a seamless and positive experience for both candidates and interviewers.",
                            url: "/products/interview-experiencing",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Offer Journey",
                          content: {
                            heading: "Offer Journey",
                            description:
                              "The Offer Journey MIA within the Nightingale MISS is designed to streamline and enhance the process of extending job offers to candidates. It provides a seamless, digital experience that ensures a smooth transition from the candidate selection phase to the onboarding phase.",
                            url: "/products/offer-genius",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Onboarding",
                          content: {
                            heading: "Onboarding",
                            description:
                              "The Onboarding MIA within the Nightingale MISS is designed to create a seamless and engaging onboarding experience for new employees. It enables organizations to streamline the onboarding process, accelerate new hire productivity. ",
                            url: "/products/onboarding",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Goal Setting",
                          content: {
                            heading: "Goal Setting",
                            description:
                              "The Goal Setting MIA within the Nightingale MISS empowers organizations to effectively set, track, and manage employee goals. It provides a collaborative platform that enables alignment between individual goals and organizational objectives, fostering a culture of transparency, accountability, and continuous improvement.",
                            url: "/products/goalalign",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "1st Day/Month/Quarter",
                          content: {
                            heading: "1st Day/Month/Quarter",
                            description:
                              "Transform your hiring process with Mobius Smart Recruiting Solution, an AI-powered recruitment platform that streamlines your end-to-end recruiting process. ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Recruiting",
                        description:
                          "Transform your hiring process with Mobius Smart Recruiting Solution, an AI-powered recruitment platform that streamlines your end-to-end recruiting process. ",
                        url: "/products/recruiting",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Employee Engagement",
                      subitems: [
                        {
                          name: "Attendance & Leaves",
                          content: {
                            heading: "Attendance & Leaves",
                            description:
                              "The Attendance & Leaves MIA within the Nightingale MISS provides a comprehensive solution for managing employee attendance, leaves, and time-off requests.",
                            url: "/products/attendance-and-leaves",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Rewards & Recognition",
                          content: {
                            heading: "Rewards & Recognition",
                            description:
                              "The Rewards & Recognition MIA within the Nightingale MISS is designed to enhance employee engagement and motivation by providing a platform for recognizing and rewarding exceptional performance and achievements.",
                            url: "/products/rewards-and-recognition",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Employee Branding",
                          content: {
                            heading: "Employee Branding",
                            description:
                              "The Employee Branding MIA within the Nightingale MISS enables organizations to strengthen their employer brand and enhance their reputation as an employer of choice.",
                            url: "/products/employee-branding",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "OpsMax",
                          content: {
                            heading: "OpsMax",
                            description:
                              "OpsMax is a powerful platform that enables small and medium enterprises, including startups, to launch and manage their employee stock option plans (ESOPs) quickly and efficiently. ",
                            url: "/products/opsmax",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Employee Engagement",
                        description:
                          "Personalized content, intelligent surveys, dynamic rewards, and seamless communication channels, all combined in one platform. Keep your employees happy, engaged, and loyal.",
                        url: "/products/employee-engagement",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Org. Dev & Planning",
                      subitems: [
                        {
                          name: "Organisation Key Responsibilities",
                          content: {
                            heading: "Organisation Key Responsibilities",
                            description:
                              "The Organizational Key Responsibilities (OKRs) MIA within the Nightingale MISS helps organizations effectively define and manage their key objectives and responsibilities at the organizational level. It provides a structured framework to align individual and team goals with the broader organizational goals, fostering transparency, accountability, and a results-oriented culture.",
                            url: "/products/Organisation-key-responsibilities",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Organization Modelling",
                          content: {
                            heading: "Organization Modelling",
                            description:
                              "The Org Modelling MIA within the Nightingale MISS offers a comprehensive solution for organizational design and modeling. It provides organizations with the tools and capabilities to create, simulate, and optimize organizational structures, hierarchies, roles, and responsibilities.",
                            url: "/products/org-modelling",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Leadership",
                          content: {
                            heading: "Leadership",
                            description:
                              "The Leadership MIA within the Nightingale MISS is a comprehensive solution designed to empower organizations in developing effective leadership capabilities. It provides tools and resources to identify, develop, and nurture leadership talent within the organization.",
                            url: "/products/leadership",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Budget Planning",
                          content: {
                            heading: "Budget planning",
                            description:
                              "The Budget Planning MIA within the Nightingale MISS is a comprehensive solution designed to streamline and optimize the budget planning process for organizations. It provides a range of tools and functionalities to facilitate efficient budget creation, collaboration, and analysis.",
                            url: "/products/budget-planning",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Org. Dev & Planning",
                        description:
                          "The Organizational Key Responsibilities (OKRs) MIA within the Nightingale MISS helps organizations effectively define and manage their key objectives and responsibilities at the organizational level. It provides a structured framework to align individual and team goals with the broader organizational goals, fostering transparency, accountability, and a results-oriented culture.",
                        url: "/products/orgdev-and-planning",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Learning & Development",
                      subitems: [
                        {
                          name: "Performance Management",
                          content: {
                            heading: "Performance Management",
                            description:
                              "The Performance Management MIA within the Nightingale MISS is a comprehensive solution designed to streamline and optimize the performance management process for organizations. ",
                            url: "/products/performance-management",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Skill Gap Analysis",
                          content: {
                            heading: "Skill Gap Analysis",
                            description:
                              "The Skill Gap Analysis MIA within the Nightingale MISS is a powerful tool designed to help organizations identify and address skill gaps within their workforce. It enables HR and L&D teams to assess the current skill levels of employees, identify areas for improvement, and develop targeted training and development programs. ",
                            url: "/products/skill-gap-analysis",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Learning Plan",
                          content: {
                            heading: "Learning Plan",
                            description:
                              "The Learning Plan MIA within the Nightingale MISS is a comprehensive tool that enables organizations to create personalized learning paths for their employees. It empowers HR and L&D teams to design, track, and manage individualized learning journeys, fostering continuous learning and development within the organization.",
                            url: "/products/learning-plan",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Learning Calender",
                          content: {
                            heading: "Learning Calender",
                            description:
                              "The Learning Calendar MIA within the Nightingale MISS is a powerful tool that enables organizations to plan, schedule, and manage learning events, programs, and initiatives effectively. ",
                            url: "/products/eventtrack-simplified-learning-event-management",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Learning & Development",
                        description:
                          "LearnX is a cutting-edge Learning and Development and Planning product built by Mobius DTasS, designed to revolutionize the way organizations train and develop their workforce. With advanced features and an intuitive user interface, LearnX is the ultimate solution for optimizing employee performance and achieving business goals. ",
                        url: "/products/learning-and-development",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Comp & Benefits",
                      subitems: [
                        {
                          name: "Salary Calculations",
                          content: {
                            heading: "Salary Calculations",
                            description:
                              "The Salary Calculation MIA within the Nightingale MISS is a comprehensive tool designed to automate and simplify the process of calculating employee salaries accurately. It streamlines the salary calculation process, ensuring efficiency, accuracy, and compliance with payroll regulations.",
                            url: "/products/salary-calculations",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Bonus Calculations",
                          content: {
                            heading: "Bonus Calculations",
                            description:
                              "The Bonus Calculations MIA within the Nightingale MISS is a powerful tool designed to simplify and streamline the process of calculating employee bonuses accurately.  ",
                            url: "/products/bonus-calculations",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Performance Bonus Calculations",
                          content: {
                            heading: "Performance Bonus Calculations",
                            description:
                              "CompX is a futuristic Comp and Benefits product built by Mobius DTasS, designed to revolutionize the way organizations manage their compensation and benefits programs. With advanced features and an intuitive user interface, CompX is the ultimate solution for optimizing employee compensation and benefits ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Payroll Integration",
                          content: {
                            heading: "Payroll Integration",
                            description:
                              "CompX is a futuristic Comp and Benefits product built by Mobius DTasS, designed to revolutionize the way organizations manage their compensation and benefits programs. With advanced features and an intuitive user interface, CompX is the ultimate solution for optimizing employee compensation and benefits ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Expense & Reimbursements",
                          content: {
                            heading: "Expense & Reimbursements",
                            description:
                              "The Expense & Reimbursements MIA within the Nightingale MISS is a comprehensive solution that simplifies and streamlines the management of employee expenses and reimbursements.  ",
                            url: "/products/expense-and-reimbursements",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Comp & Benefits",
                        description:
                          "CompX is a futuristic Comp and Benefits product built by Mobius DTasS, designed to revolutionize the way organizations manage their compensation and benefits programs. With advanced features and an intuitive user interface, CompX is the ultimate solution for optimizing employee compensation and benefits ",
                        url: "/products/comp-and-benefits",
                        coverImage: images.Navbar9,
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Employees ",
                description:
                  "Mobius Networks delivers comprehensive NoCode solutions to help businesses effectively manage and engage employees, fostering a productive and innovative workforce. Our user-friendly platform enables organizations to create and deploy customized applications for every stage of the employee lifecycle, ensuring seamless integration with existing processes.",
                url: "/products",
                coverImage: images.Navbar9,
              },
            },
            {
              name: "Citizen",
              subitems: [
                {
                  name: "Citizen",
                  items: [
                    {
                      name: "Citizen Safety",
                      subitems: [
                        {
                          name: "GoFEMA",
                          content: {
                            heading: "GoFEMA",
                            description:
                              "The GoFEMA App is a transformative solution designed for NextGenTV broadcasters to rapidly deploy emergency management communications during times of crisis.",
                            url: "/products/gofema",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Aegis",
                          content: {
                            heading: "Aegis",
                            description:
                              "Mobius Consulting's Aegis MIA provides real-time, intelligent alerting capabilities to improve emergency response times, coordination, and effectiveness.  ",
                            url: "/products/fra",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "iPAWS",
                          content: {
                            heading: "iPAWS",
                            description:
                              "The Advance Alerting App is an emergency alert service designed for US broadcasters in B2X2X models, leveraging the power of the Integrated Public Alert and Warning System (iPAWS) offered by FEMA",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Citizen Safety",
                        description:
                          "With Mobius Citizen Engagement, we're revolutionizing how local governments connect with their citizens. Our multichannel engagement platform delivers personalized content and real-time analytics, empowering smart communities to connect and engage with their citizens like never before. ",
                        url: "/products/citizen-safety",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Citizen Engagements",
                      subitems: [
                        {
                          name: "Clink",
                          content: {
                            heading: "Clink",
                            description:
                              "The Clink TV App offers a comprehensive platform for consumers to report civic issues, receive updates on their resolution, and engage in social dialogue with fellow community members.  ",
                            url: "/products/Clink",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "iZak",
                          content: {
                            heading: "iZak",
                            description:
                              "iZak is a groundbreaking SaaS application built on the Nexus Connect Low Code Platform, utilizing its five powerful tools - PI-Pascal Intelligence, BoB-BoltzmannBot, Monet-The Experience Builder, Vinci - The Omnichannel Engagement tool, and HolaVerse - The Marketplace. ",
                            url: "/products/iZak",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "ImpressIO",
                          content: {
                            heading: "ImpressIO",
                            description:
                              "Mobius ImpressIO provides powerful data visualization tools that enable organizations to monitor and analyze their data in real-time. ",
                            url: "/products/ImpressIO",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Citizen Engagements",
                        description:
                          "CitizenConnect is a futuristic Citizen Engagements product built by Mobius DTasS that helps citizens connect with their local government, stay informed, and participate in decision-making processes. With its advanced features and intuitive user interface, CitizenConnect puts you ahead of the competition ",
                        url: "/products/citizen-engagement",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Community Engagements",
                      subitems: [
                        {
                          name: "Live news",
                          content: {
                            heading: "Live news",
                            description:
                              "The Live News App is a next-generation TV application built on top of Mobius as a fullscreen TV app delivered over ATSC 3.0 spectrum, designed to enable NextGenTV broadcasters to offer personalized, hyper-targeted, and rich-media news content to their consumers.",
                            url: "/products/live-news",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "ImpressIO As a Service",
                          content: {
                            heading: "ImpressIO As a Service",
                            description:
                              " DSaaS offers an unparalleled multi-user, multi-org interactive signage presentation platform that revolutionizes the traditional signage industry, unlocking significant business opportunities and establishing itself as the ideal choice for smart network operators. ",
                            url: "/products/DSaaS",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Metro",
                          content: {
                            heading: "Metro",
                            description:
                              "The ETA App is an all-inclusive local transport information and interaction service tailored for broadcasters to serve their communities via the NextGenTV spectrum in a B2X2X model.  ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Live Traffic",
                          content: {
                            heading: "Live Traffic",
                            description:
                              "Live Traffic is an innovative, next-generation TV application built on top of Mobius, designed to deliver real-time traffic updates and insights directly to viewers through fullscreen TV apps using ATSC 3.0 spectrum.  ",
                            url: "/products/live-traffic",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "AmplyFund",
                          content: {
                            heading: "AmplyFund",
                            description:
                              "The AmplyFund is a next-generation TV application built on top of Mobius as a fullscreen TV app delivered over ATSC 3.0 spectrum, designed to enable NextGenTV broadcasters to offer fundraising as a service to their local communities. ",
                            url: "/products/amplyfund",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Hear. Here.",
                          content: {
                            heading: "Hear. Here.",
                            description:
                              "Hear. Here. takes advantage of NextGenTV technology to provide listeners with high-definition radio broadcasting. It offers crystal-clear audio quality, enhanced reception, and interactive features, transforming the radio listening experience. ",
                            url: "/products/hear-here",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "NextGenTV Launcher App",
                          content: {
                            heading: "NextGenTV Launcher App",
                            description:
                              " The NextGenTV Launcher MIA serves as the user interface and launching platform for NextGenTV applications, channels, and content. It simplifies the user experience, allowing viewers to access and navigate NextGenTV offerings effortlessly.",
                            url: "/products/nextgentv-launcher-app",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "IAB Ad Bundle MIA",
                          content: {
                            heading: "IAB Ad Bundle MIA",
                            description:
                              "An MIA that provides a bundle of Interactive Advertising Bureau (IAB) compliant ad formats for NextGenTV broadcasts. This MIA offers seamless integration of interactive and engaging advertisements, maximizing revenue potential for broadcasters and advertisers.",
                            url: "/products/iab-ad-bundle",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Community Engagements",
                        description:
                        "CommunityX is the ultimate tool for community engagement, providing a comprehensive solution for live news, ImpressIO, metro integration, and traffic monitoring.",
                        url: "/products/community-engagements",
                        coverImage: images.Navbar9,
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Citizen",
                description:
                  "Mobius Networks offers powerful NoCode solutions designed to help governments effectively manage and engage with citizens, promoting transparency, accessibility, and safety. Our user-friendly platform enables the creation and deployment of customized applications tailored to the unique needs of government agencies and public sector organizations, seamlessly integrating with existing processes and systems.",
                url: "/products",
                coverImage: images.Navbar9,
              },
            },
            {
              name: "Phygital",
              subitems: [
                {
                  name: "Phygital",
                  items: [
                    {
                      name: "Phygital Monetization",
                      subitems: [
                        {
                          name: "Marketplace",
                          content: {
                            heading: "Marketplace",
                            description:
                              "Mobius DTasS is the revolutionary Phygital Monetization platform designed to help businesses monetize their physical and digital assets effectively and efficiently. ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "IOT Gateway",
                          content: {
                            heading: "IOT Gateway",
                            description:
                              "Mobius DTasS is the revolutionary Phygital Monetization platform designed to help businesses monetize their physical and digital assets effectively and efficiently. ",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Phygital Monetization",
                        description:
                          "Mobius DTasS is the revolutionary Phygital Monetization platform designed to help businesses monetize their physical and digital assets effectively and efficiently. ",
                        url: "/comingsoon",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Data Monetization",
                      subitems: [
                        {
                          name: "Marketplace",
                          content: {
                            heading: "Marketplace",
                            description:
                              "Mobius DTasS is the innovative Data Monetization platform designed to help businesses monetize their data assets effectively and efficiently.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Connector Library",
                          content: {
                            heading: "Connector Library",
                            description:
                              "Mobius DTasS is the innovative Data Monetization platform designed to help businesses monetize their data assets effectively and efficiently.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Integrations Library",
                          content: {
                            heading: "Integrations Library",
                            description:
                              "Mobius DTasS is the innovative Data Monetization platform designed to help businesses monetize their data assets effectively and efficiently.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Workflows",
                          content: {
                            heading: "Workflows",
                            description:
                              "Mobius DTasS is the innovative Data Monetization platform designed to help businesses monetize their data assets effectively and efficiently.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Visualizations",
                          content: {
                            heading: "Visualizations",
                            description:
                              "Mobius DTasS is the innovative Data Monetization platform designed to help businesses monetize their data assets effectively and efficiently.",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Data Monetization",
                        description:
                          "Mobius DTasS is the innovative Data Monetization platform designed to help businesses monetize their data assets effectively and efficiently.",
                        url: "/comingsoon",
                        coverImage: images.Navbar9,
                      },
                    },
                    {
                      name: "Smart City as a Service",
                      subitems: [
                        {
                          name: "Integrated command and Control Systems",
                          content: {
                            heading: "Integrated command and Control Systems",
                            description:
                              "Empower city administrators with a centralized command and control system to monitor and manage various aspects of the city in real-time. Enhance situational awareness, streamline emergency response, and optimize city operations with a comprehensive view of data and analytics.",
                            url: "/products/integrated-command-and-control-system",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Perimeter Monitoring",
                          content: {
                            heading: "Perimeter Monitoring",
                            description:
                              " Ensure the safety and security of the city by implementing a robust perimeter monitoring system. Utilize advanced technologies such as video analytics, facial recognition, and intrusion detection to identify potential threats and manage access control.",
                            url: "/products/perimeter-monitoring",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Traffic Management",
                          content: {
                            heading: "Traffic Management",
                            description:
                              "Optimize traffic flow and reduce congestion with an intelligent traffic management system. Leverage real-time data, predictive analytics, and adaptive signal control to improve traffic efficiency, enhance road safety, and provide a seamless transportation experience for commuters. ",
                            url: "/products/traffic-management",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Video surveillance As a Service",
                          content: {
                            heading: "Video surveillance As a Service",
                            description:
                              "Establish a comprehensive video surveillance network to enhance city-wide security and public safety. Leverage advanced camera systems, video analytics, and cloud-based storage to capture and analyze video data.",
                            url: "/products/video-surveillance-as-a-service",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Smart City as a Service",
                        description:
                          "With Smart City as a Service, you can leverage the power of Nexus Connect to unlock the full potential of your city's infrastructure and resources, creating a thriving ecosystem that drives innovation and growth. ",
                        url: "/solutions/smart-city-as-a-service",
                        coverImage: images.Navbar9,
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Phygital",
                description:
                  "Mobius Networks offers groundbreaking NoCode solutions to drive phygital transformation, seamlessly merging the physical and digital realms for an immersive, interconnected experience. Our intuitive platform enables businesses and organizations to create and deploy customized applications that bridge the gap between offline and online environments, fostering innovation, engagement, and efficiency.",
                url: "/products",
                coverImage: images.Navbar9,
              },
            },
            {
              name: "Partners",
              subitems: [
                {
                  name: "Partners",
                  items: [
                    {
                      name: "Public Marketplace as a Service ",
                      subitems: [
                        {
                          name: "e-store",
                          content: {
                            heading: "e-store",
                            description:
                              "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                            url: "/comingsoon",
                            coverImage: images.Navbar14,
                          },
                        },
                        {
                          name: "Rate Card Management",
                          content: {
                            heading: "rate Card Management",
                            description:
                              "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                            url: "/comingsoon",
                            coverImage: images.Navbar14,
                          },
                        },
                        {
                          name: "RPF Process",
                          content: {
                            heading: "RPF Process",
                            description:
                              "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                            url: "/comingsoon",
                            coverImage: images.Navbar14,
                          },
                        },
                        {
                          name: "Alliance Management",
                          content: {
                            heading: "Alliance Management",
                            description:
                              "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                            url: "/comingsoon",
                            coverImage: images.Navbar14,
                          },
                        },
                        {
                          name: "Payments",
                          content: {
                            heading: "Payments",
                            description:
                              "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                            url: "/comingsoon",
                            coverImage: images.Navbar14,
                          },
                        },
                      ],
                      content: {
                        heading: "Public Marketplace as a Service ",
                        description:
                          "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                        url: "/comingsoon",
                        coverImage: images.Navbar14,
                      },
                    },
                    {
                      name: "Partnership Relationship Management",
                      subitems: [
                        {
                          name: "Partner Engagement",
                          content: {
                            heading: "Partner Engagement",
                            description:
                              "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                            url: "/comingsoon",
                            coverImage: images.Navbar14,
                          },
                        },
                        {
                          name: "Partner Community Management",
                          content: {
                            heading: "Partner Community Management",
                            description:
                              "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                            url: "/comingsoon",
                            coverImage: images.Navbar14,
                          },
                        },
                      ],
                      content: {
                        heading: "Partnership Relationship Management",
                        description:
                          "Maximize the potential of strategic collaborations, streamline partnership processes, and harness the power of collective expertise to drive innovation and business growth.",
                        url: "/comingsoon",
                        coverImage: images.Navbar14,
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Partners",
                description:
                  "Mobius Networks offers robust NoCode solutions to streamline partnerships and alliances, enabling businesses to forge and manage strategic collaborations with ease. Our user-friendly platform allows organizations to create and deploy customized applications, ensuring seamless communication, resource sharing, and growth opportunities with partners and affiliates.",
                url: "/comingsoon",
                coverImage: images.Navbar14,
              },
            },
            {
              name: "Technology",
              subitems: [
                {
                  name: "Technology",
                  items: [
                    {
                      name: "Automation DevOps",
                      subitems: [
                        {
                          name: "Connectors",
                          content: {
                            heading: "Connectors",
                            description:
                              "Mobius DTasS is the next-generation DevOps automation platform that streamlines software development, testing, and deployment processes. With advanced automation features and intelligent workflows, we help businesses accelerate software delivery and reduce time-to-market",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Workflows",
                          content: {
                            heading: "Workflows",
                            description:
                              "Mobius DTasS is the next-generation DevOps automation platform that streamlines software development, testing, and deployment processes. With advanced automation features and intelligent workflows, we help businesses accelerate software delivery and reduce time-to-market",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                        {
                          name: "Playbooks",
                          content: {
                            heading: "Playbooks",
                            description:
                              "Mobius DTasS is the next-generation DevOps automation platform that streamlines software development, testing, and deployment processes. With advanced automation features and intelligent workflows, we help businesses accelerate software delivery and reduce time-to-market",
                            url: "/comingsoon",
                            coverImage: images.Navbar9,
                          },
                        },
                      ],
                      content: {
                        heading: "Automation DevOps",
                        description:
                          "Mobius automated DevOps empowers your IT operations with the latest in automated DevOps. With tools for monitoring, app development, engagement, and collaboration, it helps modern enterprises deliver high-quality IT services and unlock new opportunities.",
                        url: "/comingsoon",
                        coverImage: images.Navbar9,
                      },
                    },
                  ],
                },
              ],
              article: {
                heading: "Technology",
                description:
                  "Mobius Networks delivers powerful NoCode solutions to help businesses thrive in the rapidly evolving technology landscape. Our user-friendly platform empowers organizations to create, deploy, and scale customized applications and services, ensuring seamless integration with existing systems and fostering a culture of innovation and agility.",
                url: "/comingsoon",
                coverImage: images.Navbar9,
              },
            },
          ],
        },
      ],
    },
    {
      name: "Platform",
      menuItems: [
        {
          name: "SaaS Tools",
          list: [
            {
              name: "PI - Pascal Intellligence",

              article: {
                heading: "PI - Pascal Intellligence",
                description:
                  "PI-Pascal Intelligence is a powerful multi-tenant, cloud-native SaaS tool that empowers enterprises to make data-driven decisions and turn data into actionable insights. It provides low-code tools for data visualization, contextualization, and targeting, along with all three layers of big data processing - ingest, process, and serve.",
                coverImage: images.PascalIntelligenceNavbar,
                url: "/platform/pascal-intelligence",
              },
            },
            {
              name: "BoB - BoltzmannBot",

              article: {
                heading: "BoB - BoltzmannBot",
                description:
                  "BoB is a cutting-edge API automation and business process orchestration platform that streamlines and automates complex workflows across industries. BoB leverages the power of advanced algorithms and machine learning to deliver efficient, scalable, and reliable automation solutions.",
                coverImage: images.BoltzmanBot,
                url: "/platform/boltzman-bot",
              },
            },
            {
              name: "Monet",

              article: {
                heading: "Introducing Monét",
                description:
                  "Monet is a low-code application development multi-tenant SaaS tool that enables businesses to create a multitude of applications in various B2X2X models, making it an ideal solution for any enterprise looking to digitize and create innovative digital experiences.",
                coverImage: images.Monet,
                url: "/platform/monet",
              },
            },
            {
              name: "Vinci",

              article: {
                heading: "Vinci",
                description:
                  "Vinci is a cloud-native, multi-tenant SaaS tool that provides omnichannel engagement as a service. The platform empowers users to create real-time engagements that connect them with customers, employees, partners, and stakeholders in real-time, driving unbeatable ROI.",
                coverImage: images.Vinci,
                url: "/platform/vinci",
              },
            },
            {
              name: "Holacracy",

              article: {
                heading: "Holacracy",
                description:
                  "Holacracy is a cutting-edge, multi-tenant SaaS platform that offers a collaborative marketplace as a service. The platform provides businesses with the raw materials for digital transformation, including technology providers, content providers, infrastructure providers, and monetization partners. Holacracy is the ultimate destination for businesses looking to take their phygital transformation to the next level and drive success through collaborative partnerships.",
                coverImage: images.Holacracy,
                url: "/platform/holacracy",
              },
            },
          ],
        },
        // {
        //   name: "Public ",
        //   list: [
        //     {
        //       name: "NextGen TV Marketplace",
        //       article: {
        //         heading: "NextGen TV Marketplace",
        //         description:
        //           "The NextGen TV Marketplace, fueled by the power of Holacracy, transforms the television industry in the United States by providing an innovative Marketplace as a Service. With a focus on NextGen TV technology, this marketplace invites broadcasters, IoT farm operators, smart device manufacturers, consumer electronics (CE) set manufacturers, advertisers, and application developers to collaborate and drive the evolution of television experiences in each city.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/marketplace/NextGen-TV",
        //       },
        //     },
        //     {
        //       name: "ONDC",
        //       article: {
        //         heading: "ONDC",
        //         description:
        //           "ONDC stands for Open Network for Digital Commerce. It is an initiative by the Government of India to create an open and inclusive digital commerce ecosystem. ONDC aims to provide a level playing field for all participants in the digital commerce space, enable innovation, and promote fair competition.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //     {
        //       name: "Weather Insured",
        //       article: {
        //         heading: "Weather Insured",
        //         description:
        //           "WeatherInsured is a powerful weather intelligence platform that revolutionizes the way organizations harness weather data. Our SaaS marketplace brings together feed providers, content providers, and API providers, offering low-code tools to build customized digital experiences. From optimizing logistics to saving lives, WeatherInsured is the go-to solution for weather-informed strategies.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/marketplace/weather-insured",
        //       },
        //     },
        //     {
        //       name: "Singapore  City Smart Nation",
        //       article: {
        //         heading: "Singapore City Smart Nation",
        //         description:
        //           "The Smart Nation Marketplace, powered by Mobius Holacracy, revolutionizes the digital landscape of Singapore by providing a unique Marketplace as a Service.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/marketplace/singapore-smart-nation",
        //       },
        //     },
        //   ],
        // },
        // {
        //   name: "Private ",
        //   list: [
        //     {
        //       name: "Railtech Smartcity As a Service",
        //       article: {
        //         heading: "Railtech Smartcity As a Service",
        //         description:
        //           "The RailTel Smart City Marketplace addresses the challenges faced by cities in implementing smart city initiatives. By providing a centralized marketplace, cities can access a wide range of digital solutions, technologies, and services from qualified providers.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/marketplace/railtel-smart-city",
        //       },
        //     },
        //     {
        //       name: "Hyderabad Metro",
        //       article: {
        //         heading: "Hyderabad Metro",
        //         description:
        //           "The Mobius Hyderabad Metro Marketplace, built on the robust foundation of Nexus Connect, revolutionizes the urban mobility landscape in Hyderabad. It serves as a vibrant platform for commuters, service providers, and businesses to connect, collaborate, and enhance the overall travel experience.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //     {
        //       name: "Banglore Metro",
        //       article: {
        //         heading: "Banglore Metro",
        //         description:
        //           "The Bangalore Metro Network is revolutionizing the way commuters travel and engage with the city. With the launch of the Bangalore Metro Marketplace, the network opens up new avenues for monetization through enhanced commuter engagement and advertising opportunities.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/marketplace/bangalore-metro",
        //       },
        //     },
        //     {
        //       name: "KSRTC",
        //       article: {
        //         heading: "KSRTC",
        //         description:
        //           "The Mobius Marketplace for KSRTC brings a new era of digital transformation to Kerala's road transport landscape. Built on the powerful Nexus Connect platform, this marketplace enables KSRTC to connect with passengers, service providers, and other stakeholders, fostering collaboration and enhancing the overall travel experience.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/marketplace/ksrtc",
        //       },
        //     },
        //     {
        //       name: "Aventiv",
        //       article: {
        //         heading: "Aventiv",
        //         description:
        //           "PI-Pascal Intelligence is a powerful multi-tenant, cloud-native SaaS tool that empowers enterprises to make data-driven decisions and turn data into actionable insights. It provides low-code tools for data visualization, contextualization, and targeting, along with all three layers of big data processing - ingest, process, and serve.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //   ],
        // },
        // {
        //   name: "Principles that Drive our Platform",
        //   list: [
        //     {
        //       name: "Sassifying DT",
        //       article: {
        //         heading: "Sassifying DT",
        //         description:
        //           "Nexus Connect is dedicated to helping businesses achieve digital transformation at scale and speed through its suite of advanced SaaS tools. At Nexus Connect, we believe that digital transformation should be 'sassy' – agile, innovative, and cost-effective – and we are committed to delivering solutions that embody this philosophy.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //     {
        //       name: "Phygital Transformation",
        //       article: {
        //         heading: "Phygital Transformation",
        //         description:
        //           "At Nexus Connect, we believe that the digital transformation of today is phygital transformation, where the lines between the physical and digital worlds are blurred. Our platform is dedicated to helping businesses achieve true convergence between the two worlds, driving economic disruption through XaaS phygital transformation.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //     {
        //       name: "Accountable Transformation",
        //       article: {
        //         heading: "Accountable Transformation",
        //         description:
        //           "Digital Transformation (DT) initiatives are critical for businesses to remain competitive in today's fast-paced world. However, measuring the success of these initiatives can be challenging, as the metrics can vary depending on the industry, business objectives, and the nature of the transformation. This is where Nexus Connect comes in, providing businesses with a suite of SaaS tools that can help them achieve measurable and monetizable DT.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //     {
        //       name: "Saas Factory",
        //       article: {
        //         heading: "Saas Factory",
        //         description:
        //           "Nexus Connect is a SaaS factory that enables businesses to achieve rapid digital transformation at scale. By providing access to cutting-edge SaaS tools, Nexus Connect empowers businesses to transform their operations, reduce costs, enhance customer experiences, and gain a competitive edge in their industry.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //     {
        //       name: "InterOrg DT",
        //       article: {
        //         heading: "InterOrg DT",
        //         description:
        //           "Nexus Connect is a platform that enables digital transformation as a service between organizations (inter-organization) through API-to-API integrations. By providing a seamless, secure, and scalable platform for exchanging data and services, Nexus Connect empowers businesses to accelerate their digital transformation journeys and achieve better business outcomes.",
        //         coverImage: images.PascalIntelligenceNavbar,
        //         url: "/comingsoon",
        //       },
        //     },
        //   ],
        // },
      ],
    },
    {
      name: "Tokenomics",
      menuItems: [
        {
          name: "Tokenomics",
          list: [
            {
              name: "Invest",
              subitems: {
                name: "Invest",
                items: [
                  {
                    name: "Buy Cryptos",
                    content: {
                      heading: "Buy Cryptos",
                      description:
                        "Empowering NextGen TV broadcasters with Mobius low-code platform to create immersive viewing experiences. Deploy applications and services faster than ever before, creating new value and driving innovation across the industry. Stay ahead of the competition with Mobius.",
                      coverImage: images.In_the_news,
                      url: "/invest/buy-cryptos",
                    },
                  },
                  {
                    name: "Earn cryptos",
                    content: {
                      heading: "Earn cryptos",
                      description:
                        "Mobius Consulting specializes in enabling businesses to seamlessly integrate the physical and digital worlds through its Phygital & IoT service. This service combines cutting-edge technologies, innovative strategies, and domain expertise to deliver immersive and connected experiences that bridge the gap between physical and digital environments.",
                      coverImage: images.In_the_news,
                      url: "/invest/earn-cryptos",
                    },
                  },
                  {
                    name: "Diversify with Thematics",
                    content: {
                      heading: "Diversify with Thematics",
                      description:
                        " Mobius Consulting specializes in delivering transformative advertising technology solutions through its AdTech service. This service empowers businesses to optimize their advertising strategies, maximize reach, and drive impactful campaigns across digital channels. ",
                      coverImage: images.In_the_news,
                      url: "/invest/diversify-with-thematics",
                    },
                  },
                  {
                    name: "Card Funding",
                    content: {
                      heading: "Card Funding",
                      description:
                        "The AI & ML Applications CoE harnesses the power of artificial intelligence and machine learning to deliver intelligent and data-driven solutions. Our team develops AI algorithms, trains machine learning models, and applies advanced analytics techniques to extract valuable insights from data. ",
                      coverImage: images.In_the_news,
                      url: "/invest/card-funding",
                    },
                  },
                  {
                    name: "All cryptos",
                    content: {
                      heading: "All cryptos",
                      description:
                        "Transforming digital experiences by leveraging blockchain technology to enhance security, transparency, and trust, empowering businesses to create innovative and decentralized solutions.",
                      coverImage: images.In_the_news,
                      url: "/invest/all-cryptos",
                    },
                  },
                  {
                    name: "Assets Analysis",
                    content: {
                      heading: "Assets Analysis",
                      description:
                        "Transforming digital experiences by leveraging blockchain technology to enhance security, transparency, and trust, empowering businesses to create innovative and decentralized solutions.",
                      coverImage: images.In_the_news,
                      url: "/invest/assets-analysis",
                    },
                  },
                  {
                    name: "Portfolio Visualizer",
                    content: {
                      heading: "Portfolio Visualizer",
                      description:
                        "Transforming digital experiences by leveraging blockchain technology to enhance security, transparency, and trust, empowering businesses to create innovative and decentralized solutions.",
                      coverImage: images.In_the_news,
                      url: "/invest/portfolio-visualizer",
                    },
                  },
                  {
                    name: "Auto-Invest",
                    content: {
                      heading: "Auto-Invest",
                      description:
                        "Transforming digital experiences by leveraging blockchain technology to enhance security, transparency, and trust, empowering businesses to create innovative and decentralized solutions.",
                      coverImage: images.In_the_news,
                      url: "/invest/auto-invest",
                    },
                  },
                ],
              },
              // url:"/overview",
              article: {
                heading: "Invest",
                description:
                  "At Mobius Consulting, we are digital transformation architects, envisioning the future of intelligent solutions. We combine deep industry expertise with cutting-edge technologies to help businesses reimagine their digital landscape and unlock new opportunities.",
                coverImage: images.Overview_min,
                url: "/invest/earn-cryptos",
              },
            },
            {
              name: "Community",
              subitems: {
                name: "Community",
                items: [
                  {
                    name: "Our Borg Token",
                    content: {
                      heading: "Our Borg Token",
                      description:
                        "Mobius Consulting provides Platform Engineering services to help businesses design, build, and optimize scalable and resilient digital platforms.The Platform Engineering CoE at Mobius Consulting specializes in designing and building robust and scalable platforms for digital transformation initiatives.",
                      coverImage: images.In_the_news,
                      url: "/community/our-borg-token",
                    },
                  },
                  {
                    name: "SwissBorg heroes",
                    content: {
                      heading: "SwissBorg heroes",
                      description:
                        "Mobius Consulting provides Cloud Engineering community to help businesses accelerate their cloud adoption journey and optimize their cloud infrastructure. Our team has extensive experience in designing cloud-native architectures, migrating applications to the cloud, and optimizing cloud infrastructure for efficiency and cost-effectiveness. ",
                      coverImage: images.In_the_news,
                      url: "/community/swissborg-heroes",
                    },
                  },
                  {
                    name: "Borg Token metrics",
                    content: {
                      heading: "Borg Token metrics",
                      description:
                        "Mobius Consulting offers Data Science & Engineering community to help businesses unlock the power of their data and derive actionable insights.The Data Engineering CoE specializes in managing and leveraging data as a strategic asset. Our team has expertise in data integration, data warehousing, and data pipeline development.",
                      coverImage: images.In_the_news,
                      url: "/community/borg-token-metrics",
                    },
                  },
                  {
                    name: "Earn free crypto rewards",
                    content: {
                      heading: "Earn free crypto rewards",
                      description:
                        "The AI & ML Applications CoE harnesses the power of artificial intelligence and machine learning to deliver intelligent and data-driven solutions. Our team develops AI algorithms, trains machine learning models, and applies advanced analytics techniques to extract valuable insights from data. ",
                      coverImage: images.In_the_news,
                      url: "/community/earn-free-crypto-rewards",
                    },
                  },
                  {
                    name: "Send crypto now",
                    content: {
                      heading: "Send crypto now",
                      description:
                        "The AI & ML Applications CoE harnesses the power of artificial intelligence and machine learning to deliver intelligent and data-driven solutions. Our team develops AI algorithms, trains machine learning models, and applies advanced analytics techniques to extract valuable insights from data. ",
                      coverImage: images.In_the_news,
                      url: "/community/send-crypto-now",
                    },
                  },
                  {
                    name: "Lower your fees",
                    content: {
                      heading: "Lower your fees",
                      description:
                        "The AI & ML Applications CoE harnesses the power of artificial intelligence and machine learning to deliver intelligent and data-driven solutions. Our team develops AI algorithms, trains machine learning models, and applies advanced analytics techniques to extract valuable insights from data. ",
                      coverImage: images.In_the_news,
                      url: "/community/lower-your-fees",
                    },
                  },
                  {
                    name: "Swag Shop",
                    content: {
                      heading: "Swag Shop",
                      description:
                        "The AI & ML Applications CoE harnesses the power of artificial intelligence and machine learning to deliver intelligent and data-driven solutions. Our team develops AI algorithms, trains machine learning models, and applies advanced analytics techniques to extract valuable insights from data. ",
                      coverImage: images.In_the_news,
                      url: "/community/swag-shop",
                    },
                  },
                  {
                    name: "Secure with Swissborg",
                    content: {
                      heading: "Secure with Swissborg",
                      description:
                        "The AI & ML Applications CoE harnesses the power of artificial intelligence and machine learning to deliver intelligent and data-driven solutions. Our team develops AI algorithms, trains machine learning models, and applies advanced analytics techniques to extract valuable insights from data. ",
                      coverImage: images.In_the_news,
                      url: "/community/secure-with-swissborg",
                    },
                  },
                ],
              },

              article: {
                heading: "Community",
                description:
                  "As technology innovators, we engineer deep tech solutions for the modern enterprise. Our team of experienced engineers brings together the latest technologies and best practices to design and develop robust, scalable, and secure solutions. ",
                coverImage: images.People_min,
                url: "/community/engineer",
              },
            },
            {
              name: "Launchpad",
              subitems: {
                name: "Launchpad",
                items: [
                  {
                    name: "Multi-assets Launchpad",
                    content: {
                      heading: "Multi-assets Launchpad",
                      description:
                        "Our DevOps CoE is dedicated to implementing DevOps practices, enabling organizations to achieve seamless collaboration between development and operations teams. We provide expertise in infrastructure automation, continuous integration and delivery (CI/CD), configuration management, and containerization.",
                      coverImage: images.In_the_news,
                      url: "/launchpad/multi-assets-launchpad",
                    },
                  },
                  {
                    name: "SwissBorg Series A",
                    content: {
                      heading: "SwissBorg Series A",
                      description:
                        "Our SRE CoE focuses on ensuring the reliability, scalability, and performance of digital solutions. We adopt SRE principles to proactively monitor systems, identify potential issues, and implement measures to enhance system reliability.",
                      coverImage: images.In_the_news,
                      url: "/launchpad/swissborg-series-a",
                    },
                  },

                ],
              },

              article: {
                heading: "Launchpad",
                description:
                  "At Mobius, we are always on the lookout for talented individuals to join our team and help us shape the future of enterprise data solutions. We offer a dynamic and challenging work environment, with opportunities for growth, learning, and innovation. If you are passionate about data, technology, and making a positive impact on businesses worldwide, we invite you to explore our current job openings and take the first step towards a fulfilling career with us.",
                coverImage: images.People_min,
                url: "/launchpad/multi-assets-launchpad",
              },
            },
          ],
        },
      ],
      // article: {
      //   heading: "Services",
      //   description:
      //     "Our team at Mobius is made up of highly skilled professionals dedicated to delivering the best possible enterprise data solutions for your business. With years of experience in the industry, our team members bring a wealth of knowledge and expertise to the table, ensuring that we stay ahead of the curve when it comes to the latest trends and technologies. Get to know our team and learn how they can help drive your business forward.",
      //   coverImage: images.People_min,
      //   url:"/comingsoon"
      // },
    },
    {
      name: "company",
      menuItems: [
        {
          name: "company",
          list: [
            {
              name: "About",
              subitems: {
                name: "About",
                // items: [
                //   {
                //     name: "In the News",
                //     subitems: [
                //       {
                //         name: "AI Integrations",
                //         content: {
                //           heading: "AI Integrations",
                //           description:
                //             "At Mobius, we are committed to staying at the forefront of the industry, delivering innovative enterprise data solutions that meet the evolving needs of businesses worldwide. Our 'In the News' page highlights our latest achievements, partnerships, and thought leadership in the field of digital transformation & NoCode. Stay up to date with our latest news and discover why Mobius is a trusted name in the industry.",
                //           coverImage: images.In_the_news,
                //           url: "/comingsoon",
                //         },
                //       },
                //       {
                //         name: "Zoom Bot Pro",
                //         content: {
                //           heading: "Zoom Bot Pro",
                //           description:
                //             "At Mobius, we are committed to staying at the forefront of the industry, delivering innovative enterprise data solutions that meet the evolving needs of businesses worldwide. Our 'In the News' page highlights our latest achievements, partnerships, and thought leadership in the field of digital transformation & NoCode. Stay up to date with our latest news and discover why Mobius is a trusted name in the industry.",
                //           coverImage: images.In_the_news,
                //           url: "/products/zoombot-pro",
                //         },
                //       },
                //       {
                //         name: "Platform Security",
                //         content: {
                //           heading: "Platform Security",
                //           description:
                //             "At Mobius, we are committed to staying at the forefront of the industry, delivering innovative enterprise data solutions that meet the evolving needs of businesses worldwide. Our 'In the News' page highlights our latest achievements, partnerships, and thought leadership in the field of digital transformation & NoCode. Stay up to date with our latest news and discover why Mobius is a trusted name in the industry.",
                //           coverImage: images.In_the_news,
                //           url: "/comingsoon",
                //         },
                //       },
                //     ],
                //     article: {
                //       heading: "In the News",
                //       description:
                //         "At Mobius, we are committed to staying at the forefront of the industry, delivering innovative enterprise data solutions that meet the evolving needs of businesses worldwide. Our 'In the News' page highlights our latest achievements, partnerships, and thought leadership in the field of digital transformation & NoCode. Stay up to date with our latest news and discover why Mobius is a trusted name in the industry.",
                //       coverImage: images.In_the_news,
                //       url: "/InTheNews",
                //     },
                //   },
                //   {
                //     name: "Values/Mission/Vision",
                //     subitems: {
                //       name: "",
                //       items: [],
                //     },
                //     article: {
                //       heading: "Values/Mission/Vision",
                //       description:
                //         "Making IT a profit center! Building Tomorrow's composable businesses by enabling them with low code AI enabled components.",
                //       coverImage: images.In_the_news,
                //       url: "/vision-and-mission",
                //     },
                //   },
                // ],
              },
              url: "/About",
              article: {
                heading: "About",
                description:
                  "At Mobius, we specialize in providing cutting-edge enterprise data solutions designed to help businesses optimize their operations, make informed decisions, and achieve their goals. Our advanced platform offers real-time insights, predictive analytics, and seamless integration, empowering you to unleash the full potential of your data. Discover why businesses worldwide trust [company name] for their data needs.",
                coverImage: images.Overview_min,
                url: "/About",
              },
            },

            // {
            //   name: "Careers",
            //   subitems: {
            //     name: "Careers",
            //     items: [
            //       {
            //         name: "Life @ Gaian",
            //         subitems: [],
            //         article: {
            //           heading: "Life @ Gaian",
            //           description:
            //             "At Mobius, we specialize in providing cutting-edge enterprise data solutions designed to help businesses optimize their operations, make informed decisions, and achieve their goals. Our advanced platform offers real-time insights, predictive analytics, and seamless integration, empowering you to unleash the full potential of your data. Discover why businesses worldwide trust [company name] for their data needs.",
            //           coverImage: images.Overview_min,
            //           url: "/Blogs",
            //         },
            //       },
            //       {
            //         name: "Open Positions",
            //         subitems: [],
            //         article: {
            //           heading: "Open Positions",
            //           description:
            //             "At Mobius, we specialize in providing cutting-edge enterprise data solutions designed to help businesses optimize their operations, make informed decisions, and achieve their goals. Our advanced platform offers real-time insights, predictive analytics, and seamless integration, empowering you to unleash the full potential of your data. Discover why businesses worldwide trust [company name] for their data needs.",
            //           coverImage: images.Overview_min,
            //           url: "/careeropenings",
            //         },
            //       },
            //     ],
            //   },
            //   article: {
            //     heading: "Careers",
            //     description:
            //       "At Mobius, we are always on the lookout for talented individuals to join our team and help us shape the future of enterprise data solutions. We offer a dynamic and challenging work environment, with opportunities for growth, learning, and innovation. If you are passionate about data, technology, and making a positive impact on businesses worldwide, we invite you to explore our current job openings and take the first step towards a fulfilling career with us.",
            //     coverImage: images.Careers_Min,
            //     url: "/careers",
            //   },
            // },

            {
              name: "Contact Us",
              subitems: {
                name: "",
                items: [],
              },
              article: {
                heading: "Contact Us",
                description:
                  "Got questions about our enterprise data solutions? Our team at Mobius is here to help. Whether you're interested in learning more about our platform, need technical support, or just want to say hi, we'd love to hear from you. Reach out to us via phone, email, or our online contact form, and we'll get back to you as soon as possible. Let's start a conversation about how we can help transform your business with the power of data.",
                coverImage: images.Overview_min ,
                url: "/contact",
              },
            },
            {
              name: "Come Meet Us at CES",
              subitems: {
                name: "",
                items: [],
              },
              article: {
                heading: "Come Meet Us at CES",
                description:
                  "Come meet us at CES",
                coverImage: images.Overview_min ,
                url: "/CES",
              },
            },
          ],
        },
      ],
    },
    {
      name: "Contacts",
    },
  ];
  const data1 = [data[0]];
  const data2 = [data[1]];
  const data3 = [data[2]];
  const data4 = [data[4]];
  const data5 = [data[3]];
  const [isOpen, setIsOpen] = useState(false);
  const [isprod, setIsprod] = useState(false);
  const [isplatform, setplatform] = useState(false);
  const [iscompany, setcompany] = useState(false);
  const [isservice, setservice] = useState(false);

  const [isdropped, setisdropped] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
   const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
      if(location.pathname != "/"  && location.pathname != "/CES"  && location.pathname != "/comingsoon"){
        console.log("changed",location.pathname);
            setIsScrolled(true);

      }
      else{

   

    window.addEventListener("scroll", handleScroll);
      }
    return () => {
      setIsScrolled(false);
      window.removeEventListener("scroll", handleScroll);

    };

  }, [location]);

  const handlePlatform = () => {
    setplatform(!isplatform);
    setcompany(false);
    setservice(false);
    setIsOpen(false);
    setIsprod(false);
  };

  const handleCompany = () => {
    setcompany(!iscompany);
    setservice(false);
    setIsOpen(false);
    setIsprod(false);
    setplatform(false);
  };
  const handleservice = () => {
    setservice(!isservice);
    setIsOpen(false);
    setIsprod(false);
    setplatform(false);
    setcompany(false);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsprod(false);
    setplatform(false);
    setcompany(false);
    setservice(false);
  };

  const handleprod = () => {
    setIsprod(!isprod);
    setplatform(false);
    setcompany(false);
    setservice(false);
    setIsOpen(false);
  };

  // const [rotation, setRotation] = useState(0);

  // const handlelogin = () => {
  //   setRotation(rotation + 180);
  // };
  // import DownArrow from "../images/icons/Vector.svg"

  return (
    <>
      <div className={Style.header}>
        <div
          className={isScrolled ? Style.navbar2 : Style.navbar1}
          onMouseEnter={() => {
            setIsOpen(false);
          }}
        >
          <div className={Style.headercomponents}>
            <div id={Style.contents}>
              <div
                className={Style.logo}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <Img src={"/aidtaasImages/images/imagesnew/brand-logo.svg"} />
              </div>

              <div className={!isOpen ? Style.marginfixer1 : Style.marginfixer}>
                <div
                  className={Style.text}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  SOLUTIONS
                </div>

                <div className={Style.bottombar}></div>

                {!isOpen ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img src={"/aidtaasImages/images/imagesnew/icons/Vector.svg"} />
                  </div>
                )}
              </div>
              <div className={!isprod ? Style.marginfixer1 : Style.marginfixer}>
                <div
                  className={Style.text}
                  onClick={() => {
                    handleprod();
                  }}
                >
                  PRODUCTS
                </div>

                <div className={Style.bottombar}></div>

                {!isprod ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img src={"/aidtaasImages/images/imagesnew/icons/Vector.svg"} />
                  </div>
                )}
              </div>
              <div
                className={!isplatform ? Style.marginfixer1 : Style.marginfixer}
              >
                <div
                  className={Style.text}
                  onClick={() => {
                    handlePlatform();
                  }}
                >
                  PLATFORM
                </div>

                <div className={Style.bottombar}></div>

                {!isplatform ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img src={"/aidtaasImages/images/imagesnew/icons/Vector.svg"} />
                  </div>
                )}
              </div>
              {/* <div
                className={!isservice ? Style.marginfixer1 : Style.marginfixer}
              >
                <div
                  className={Style.text}
                  onClick={() => {
                    handleservice();
                  }}
                >
                  TOKENOMICS
                </div>

                <div className={Style.bottombar}></div>

                {!isservice ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img src={"/aidtaasImages/images/imagesnew/icons/Vector.svg"} />
                  </div>
                )}
              </div> */}
              <div
                className={!iscompany ? Style.marginfixer1 : Style.marginfixer}
              >
                <div
                  className={Style.text}
                  onClick={() => {
                    handleCompany();
                  }}
                >
                  COMPANY
                </div>

                <div className={Style.bottombar}></div>

                {!iscompany ? (
                  ""
                ) : (
                  <div className={Style.bottombar2}>
                    <Img src={"/aidtaasImages/images/imagesnew/icons/Vector.svg"} />
                  </div>
                )}
              </div>
            </div>
            <div id={Style.btns}>
              <div>
                <button
                  id={Style.book}
                  onClick={() => {
                    window.open(
                      "https://calendly.com/d/2sn-wnj-xnc/sales-discovery-call?primary_color=a513a7",
                      ""
                    );
                  }}
                >
                  Login
                </button>
              </div>
              {/* <div id={Style.login} onClick={()=>{handlelogin()}}><span id={Style.log}>Login</span><span ><img  src={images.Arrow} alt='vector' style={{ transform: `rotate(${rotation}deg)`,transition: 'transform 0.5s ease', }} ></img></span></div>  */}
            </div>
          </div>
          <div className={Style.mobileheadercomponents}>
            <div className={Style.mobilecontents}>
              <div
                className={Style.logo}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <Img src={"/aidtaasImages/images/imagesnew/brand-logo.svg"} />
              </div>
            </div>
            <div className={Style.hambermenu}>
              <div>
                {!isdropped ? (
                  <div
                    onClick={() => {
                      setisdropped(true);
                    }}
                  >
                    <Img src={"/aidtaasImages/images/imagesnew/icons/menu.svg"} />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setisdropped(false);
                    }}
                  >
                    <Img src={"/aidtaasImages/images/imagesnew/icons/close-outline.svg"} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {isdropped && <Firstview data={data} />}

        {isOpen && <Solutions data={data1} setIsOpen={setIsOpen} />}
        {isprod && <Products data={data2} setproducts={setIsprod} />}
        {isplatform && <Platform data={data3} setplatform={setplatform} />}
        {isservice && <Services data={data5} setservice={setservice} />}
        {iscompany && <Company data={data4} setcompany={setcompany} />}
      </div>
    </>
  );
}

export default Header;

