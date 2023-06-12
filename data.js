const data = {
  experience: [
    {
      post: " Writing Challengr Project ",
      // company: "PuStack",
      link: "https://github.com/edw11/Writing_6-8.git",
      // dates: "July 2020 - Present",
      //span: "1 Month",
      // stack: "Flutter, Dart, UI/UX",
      description: `이 프로젝트는 꾸준히 일기를 쓰기 어려워 하거나 창의성이 부족한 사람들을 위해 진행한 프로젝트입니다.
      
                  우리의 프로그램을 통해서 많은 사람들이 글을 쓰는 것을 두려워 하지 않고 일기를 써가며 자신의 이야기를
                  잘 풀어 낼 수 있는 효과를 기대합니다.`,
    },
    {
      post: "책 추천 프로그램",
      //company: "Cypher Eruption",
      //link: "https://cyphereruption.net",
      //dates: "August 2014 - Sept 2016",
      //span: "2 Years",
      //stack: "VB.Net, Visual C#, Wordpress",
      description: ` 이 프로젝트를 진행하면서 요즘 책 읽는 사람들이 저조한 상황에서의 이유를 찾고자 했을 때

      책을 읽는 것이 어렵거나 다른 장르를 읽어보고 싶지만 어려움이 있어 쉽게 도전할 수 없는 사람들 등
      다양한 이유를 통합하여 해결할 수 있는 프로그램을 만들면 좋을 것 같아서 시작하게 되었습니다. 
      
      '책 읽기 추천 프로그램'을 통해서 많은 사람들이 다양한 책을 접하며 스스로의 역량을 키워나아갔으면 합니다.`,
    },
    {
      //post: "Frontend Developer",
      //company: "Developer Students Clubs, Chitkara University",
      //link: "#",
      //dates: "October 2019 - Present",
      //span: "8 Months",
      //stack: "HTML5, CSS, JavaScript, jQuery, Flutter",
      description: `Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.

`,
    },
    
  ],
  
  achievements: [
    {
      title: "3rd Rank",
      type: "award",
      css: "left: -8px",
      fa: "fa-trophy",
      linkTitle: "in Google Techstars Startup Weekend",
      link: " ",
    },
    {
      title: "1st Rank",
      type: "award",
      fa: "fa-trophy",
      linkTitle: "In Website Development Competition",
      link: " ",
      link2Title: "held at GNA University",
      link2: " ",
    },
    {
      title: "Hotspoter crossed 5 Million+ Downloads",
      type: "ANALYTICS",
      fa: "fa-star",
      linkTitle: "Softonic",
      link: "https://hotspoter.en.softonic.com",
      link2Title: "CNET",
      link2: "http://bit.ly/CNETHotspoter",
    },
    {
      title: "Chatter App got appreciated by Flutter Team",
      type: "appreciation",
      fa: "fa-twitter",
      linkTitle: "Tweet",
      link: "https://bit.ly/ChatterTweet",
    },
  ],
};

const experienceContainer = document.querySelector(".experience-container");
const achievementsContainer = document.querySelector(".achievements-container");

function experienceFetch(experience) {
  const result = `
            <div class="company">
                <h2>${experience.post} &nbsp;<a target="_blank" rel="noopener" href="${experience.link}"><small>@ ${experience.company}</small></a></h2>
                <div class="timespan"><span class="fa fa-calendar blue"></span> &nbsp; ${experience.dates},<small> ${experience.span}</small></div>
                <div class="experience-description">
                    <span class="stack blue">Stack: ${experience.stack}</span><br>
                    ${experience.description}
                </div>
            </div>
            `;

  return result;
}

function achievementFetch(achievement) {
  const result = `
            <div class="achievement">
                <span class="achievement-ico fa ${
                  achievement.fa
                } w3-xlarge dblue" style="${
    achievement.css || "left: -6px"
  };"></span>
                <h2> ${achievement.title}</h2>
                <span class="link">${
                  achievement.linkTitle
                }: <a class="blue" href="${achievement.link}">${
    achievement.link
  }</a></span><br/>
                ${
                  achievement.link2
                    ? `<span class="link">${achievement.link2Title}: <a class="blue" href="${achievement.link2}">${achievement.link2}</a></span>`
                    : ""
                }
            </div>
            `;

  return result;
}

achievementsContainer.innerHTML = data.achievements
  .map(achievementFetch)
  .join("");
experienceContainer.innerHTML = data.experience.map(experienceFetch).join("");

// MIGHT ADD THIS SOMTIME IN THE FUTURE

// function skillsFetch(skill) {
//   const result = `
//             <div class="skill" style="padding:5px 15px; position:relative">
//                 <h2>${skill.language}</h2>
//                 <span class="skill-score"><b>${
//                   skill.score
//                 }</b> <small>/ 10</small></span>
//                 <div class="skill-meter"><div class="skill-value" style="width:${
//                   skill.score * 10
//                 }%;"></div></div>
//             </div>
//             `;

//   return result;
// }
