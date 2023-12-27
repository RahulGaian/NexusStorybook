import React from 'react';
// import { useEffect } from 'react';
// import images from '../../../constants/images';
import "./index.css"
import Img from '../../../components/Image';
import { useSelector} from 'react-redux';
// import {fetchJobOpenings}  from './../../../Redux/Jobopeningsdata'
function Jobopenings(){
    // const data=[
    //         {
    //         title:"Devops Engineer",
    //         description:"Java, Javacript,AWS, Jenkins, Kubernetes",
    //         jobdescription:"Looking for DevOps Developer- IT Infrastructure candidates for a rapidly growing IT Services company in Hyderabad.",
    //         location:"Hyderabad",
    //         experience:"5+ years experience",
    //         url:"/devops-engineer",
    //         listmain:[
    //             { head:"Our Mission :",
    //             listdescription:[
    //                 {
    //                     list:"Constant Value creation wide innovation, creativity and tenacious determination."
    //                 },
    //             ]
    //              },

    //              { head:"key Responsibilities :",
    //             listdescription:[
    //                 {
    //                     list:"4 to 10 years of relevant experience"
    //                 },
    //                 {
    //                     list:"Amazon Web Services, Jenkins, Kubernetes(OKD), Docker, Ansible, Cent OS Administration, ELK, B ash Scripting."
    //                 },
    //                 {
    //                     list:"Good hands-on knowledge of Configuration Management and Deployment tools like - Puppet, Ansible, Chef etc."
    //                 },
    //                 {
    //                     list:"Collaborate and coach internal business unit team members to help build container ready applications using standard automated CI/CD processes."
    //                 },
    //                 {
    //                     list:"Assist client support teams to ensure issues are dealt with in a professional and timely manner."
    //                 },
    //                 {
    //                     list:"Build/Support Non-Prod (Dev, Uat, Staging) and Production container platform environments."
    //                 },
    //                 {
    //                     list:"Ensure the availability, performance, reliability, and reporting of global container platform environments."
    //                 },
    //                 {
    //                     list:"Improve productivity in delivery orchestration, proactive monitoring, self-healing automation and operation validations."
    //                 },
    //                 {
    //                     list:"Good Interpersonal Skills, team-working attitude, takes initiatives and is very proactive in solving problems and providing best solutions."
    //                 },


    //             ]
    //              },
                
    //              { head:"Additional Roles and desirable skills :",
    //             listdescription:[
    //                 {
    //                     list:"Exposure to OpenStack will be an added advantage"
    //                 },
    //                 {
    //                     list:"Enthusiasm for continuous improvement"
    //                 },
    //                 {
    //                     list:"Excellent analytical and problem-solving skills"
    //                 },
    //                 {
    //                     list:"Good verbal and written communication"
    //                 },
    //                 {
    //                     list:"Should be a self-starter and be willing to take ownership of the assigned tasks"
    //                 },
    //                 {
    //                     list:"High level of personal commitment to each task, a “can do” attitude and a drive to deliver"
    //                 }
    //             ]
    //              }
    //         ]
    //         },{
    //         title:"Java Developer",
    //         description:"Java, Core Java, Programming, Sql,Plsql,Rest",
    //         jobdescription:"Java, Core Java, Programming, Sql,Plsql,Rest",
    //         location:"Hyderabad",
    //         experience:"2+ years experience",
    //         url:"/jobdescriptions/java-developer",
    //         listmain:[
    //             { head:"The job and its impact :",
    //             listdescription:[
    //                 {
    //                     list:"You possess an appetite for problem-solving and critical thinking." 
    //                 },
    //                 {
    //                     list:"Back-end development is an inherently collaborative task. It can be made very difficult if there isn't clear and concise communication within a dev team. You are a great communicator and a great developer."
    //                 },
    //                 {
    //                     list:"You are always looking for new ways to be a better developer. You put an effort into learning and exploring the world of back-end development in your own time."
    //                 },
    //                 {
    //                     list:" The back-end development sphere is as changeable and unpredictable as any in tech. You are someone who achieves comfort in discomfort. You are aware of the tools and new technologies that are being introduced."
    //                 },
    //                 {
    //                     list:"You possess good technical communication skills: Can effectively communicate project needs with both front and back-end teammates."
    //                 },
    //                 {
    //                     list:"High emotional intelligence: Self-aware and at tuned to their peer needs."
    //                 },
    //                 {
    //                     list:"Be the best back-end developer by sheer discipline, motivation, and effort."
    //                 },
                    
    //             ]
    //              }, { head:"What essential skills do you need ?",
    //              listdescription:[
    //                  {
    //                      list:"4-6 years' experience in back end Java/J2EE application development with clear understanding of MicroservicesArchitecture."
    //                  },
    //                  {
    //                      list:"Experience in developing internet web applications using Java/J2EE technologies."
    //                  },
    //                  {
    //                      list:"Experience in different modules of Spring framework like Dependency Injection (IoC), Spring MVC, Spring ORM along with JPA."
    //                  },
    //                  {
    //                      list:"Experience in Java Version 7.0+. Good experience with JMS, Spring & Hibernate."
    //                  },
    //                  {
    //                      list:"Experience in identifying data base solutions for a given problem, preferably MySQL (good to have)"
    //                  },
    //                  {
    //                      list:"Develop well-structured, maintainable code, delivered on time, with automated tests. We are an XP/Agile development team."
    //                  },
    //                  {
    //                      list:"Hands on experience in using Application/Webservers like JBoss and Tomcat servers. Worked on data bases like Oracle& MYSQL."
    //                  },
    //                  {
    //                      list:"Experiencewithe-commerce,retail,analytics,advertising,ormediawouldbeanadvantage."
    //                  }
    //              ]
    //               },

    //              { head:"key Responsibilities :",
    //             listdescription:[
    //                 {
    //                     list:"Understand the business/client requirements and, design and develop high-value low latency Cloud-based Integration Java applications"
    //                 },
    //                 {
    //                     list:"Fix, enhance and improve the existing Java applications"
    //                 },
    //                 {
    //                     list:"Review the peers' code and provide constructive feedback"
    //                 },
    //                 {
    //                     list:"Write unit tests to achieve maximum test coverage of the code"
    //                 },
    //                 {
    //                     list:"Interact with Product Management and customers on-demand"
    //                 },
    //                 {
    //                     list:"Deliver demos for the new applications developed"
    //                 }


    //             ]
    //              },
                
    //              { head:"Primary skills :",
    //             listdescription:[
    //                 {
    //                     list:"Core Java, J2EE"
    //                 },
    //                 {
    //                     list:"SQL, Oracle/MySql"
    //                 },
    //                 {
    //                     list:"Git, Maven, Linux Commands"
    //                 },
    //                 {
    //                     list:"IDE (IntelliJ or Eclipse)"
    //                 },
    //                 {
    //                     list:"Tools (SoapUI, Postman, MySql Workbench, etc) What are the benefits"
    //                 },
    //                 {
    //                     list:"You'll get to work in some of the hottest & fastest growing technologies in USA right now."
    //                 },
    //                 {
    //                     list:"You'll get paid a competitive salary& be working directly with a super experienced team of people."
    //                 },
    //                 {
    //                     list:"You'll get a great place to come to work every day. Varied, complex, challenging & with a great culture that you can shape & change."
    //                 },
    //                 {
    //                     list:"And many more..."
    //                 }
    //             ]
    //              }
    //         ]

    //         },

    //         {
    //         title:"QA Automation",
    //         description:"Automation, Selenium with Java, Cypress, Mocha, Cucumber, Performance Testing",
    //         location:"Hyderabad",
    //         experience:"5+ years experience",
    //         url:"/jobdescriptions/QA-Automation",
    //         },
    //         {
    //         title:"Sr.Technical Writer",
    //         description:"User persona, Product, Technical Documentation, Technical Writing Tools",
    //         location:"Hyderabad",
    //         experience:"8+ years experience",
    //         url:"/jobdescriptions/Sr-writer",
    //         },
    //         {
    //         title:"Technical Support Engineer L3",
    //         description:"API, Linux, Troubleshoot, Networking, Snaplogic, AWS, Mulesoft",
    //         location:"Hyderabad",
    //         experience:"2+ years experience",
    //         url:"/jobdescriptions/tech-support-engineer",
    //         },
    //         {
    //         title:"Platform Architect",
    //         description:"Platform Architect, AWS, Kubernetes, Docker, Cloudcomputing, Enterprise Architecture",
    //         location:"Hyderabad",
    //         experience:"8+ years experience",
    //         url:"/jobdescriptions/platform-architect",
    //         },
    //     ]
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // Dispatch an action to fetch job openings
    //     dispatch(fetchJobOpenings());
    // }, [dispatch]);

    const data = useSelector(state => state.jobOpenings);
   const ChangeRoute=(Route)=>{
       window.location.href=Route
   }
//    const [activeButton, setActiveButton] = useState(null);

//    const handleButtonClick = (index) => {
//      setActiveButton(index);
//    };
 
//    const buttonData = [
//      'All Departments',
//      'Design',
//      'Engineering',
//      'Product',
//      'Sales & Marketing',
//      'Support'
//    ];
   const changeRoute=(Route)=>{
    window.location.href=Route
}
// import Career_bottom_card_icon_01 from '../images/Career/career_bottom_card_icon_01.svg'
// import Career_bottom_card_icon_02 from '../images/Career/Career_bottom_card_icon_02.svg'

        return(
            <>


            <div className='jobopeningscomponent'>
            <div className='top_content'>
                <div className="openingshead"><h1  >Work at Mobius</h1></div>

                   {/* <div className='openingheadtitles'>
      {buttonData.map((label, index) => (
        <div
          key={index}
          className={`headtitle ${activeButton === index ? 'buttonactivehead' : 'nonactivehead'}`}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </div>
      ))}
    </div> */}
            </div>
            <div className="Jobopeningsmain">
            {data.length > 0 ?(
                    data.slice(0,6).map((item,index)=>(
                        <div className="grid-item" key={index} onClick={()=>{ChangeRoute(`jobdescriptions/${item.url}`)}}>
                        <div className="grid-head">{item.title}</div>
                        <div className="grid-desc">{item.description}</div>
                        <div className="grid-bot">
                            <div className="grid-bot1">
                                <div><Img src={"/imagesnew/Career/career_bottom_card_icon_01.svg"} className=""/></div>
                                <div className="">{item.location}</div>
                            </div>
                            <div className="grid-bot2">
                               <div> <Img src={"/imagesnew/Career/Career_bottom_card_icon_02.svg"} className=""/></div>
                                <div className="">{item.experience}</div>
                            </div>
                        </div> 
                    </div>
                    ))
            ):<></>
   
            }
                      

            </div>
            <div className='openingsbottom3'>
            <div className="openingsbutton" onClick={()=>{changeRoute("careeropenings")}}>
                                View All Openings
            </div>
            </div>
            
            </div>
            
            </>
        )

}

export default Jobopenings;
