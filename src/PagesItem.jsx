import React from "react";

const pagesItem = [
  {
    key: 2,
    title: "Seaman Survival Guide",
    id: "seaman-survival-guide",
    file: "SeamanGuide",
    image: "/images/SSG.jpg",
    description:
      "Orginal content for surviving the seven seas, and emergency drills on Sundays.",
    meaning:
      "Physical hard work, mental strugles of loneliness, and the everyday courage to face the dangers and challenges in living and sailing the oceans and seas. Yes! This is Seafaring! But despite all of these, Let us not deny the reward of being able to travel the world for free with all the wonders that you might see.",
    resources: [
      {
        name: "Seaman Survival Rule #1",
        image: "/images/ssg1.jpg",
        description: (
          <div>
            <p>
              <strong>Seaman Survival Rule #1</strong> Isa kang marino. Taas
              noo! (You’re a seafarer. Be proud!)
              <br />
              Bago mo narating ang posisyon mo ngayon, marami kang pinagdaanan.
              Sa iba, madugong apat na taon sa eskwela, at iba naman, vocational
              courses. Kahit ano man naranasan mo, pare pareho tayong Naglabas
              ng pawis, luha, at dugo. Madalas makikita mo sa social media na
              nagrereklamo ang mga seaman dahil sa hirap sa trabaho, at malayo
              sa pamilya. Mas malala, meron lang nag so-sorry dahil “seaman lang
              ako.” Meron pang nagsasabi na nag seaman ako dahil NO CHOICE ako.
              Oo malayo tayo sa pamilya natin, sa mga mahal natin sa buhay. Pero
              part, tandaan mo na bago maging kayo, eh tanggap na nila kung ano
              ang nasa puso mo; ang propesyon na pinili mo. Maraming nagsasabi
              na “mag iipon lang ako, tapos titigil na ako at magnenegosyo.”
              Okay yun, kung yun ang gusto mo pero habang nasa barko ka, mahalin
              mo ang trabaho mo! Pinaghirapan mo yan, at ipinagkaloob sayo ng
              may kapal. Maging ratings ka, o opisyal, mataas ang antas ng ating
              propesyon bilang marino! Maging proud ka #modernmarino. Narating
              natin to! #modernmarino
            </p>
          </div>
        )
      },
      {
        name: "ss2",
        image: "/images/SSG.jpg",
        description:
          "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: "https://ui.dev/react-router-v5-programmatically-navigate/"
      }
    ]
  },
  {
    key: 3,
    title: "Modern Marino Ranks",
    id: "modern-marino-ranks",
    file: "Mmr",
    image: "/images/MM-Ranks.jpg",
    description:
      "Ano ba ang iba’t ibang trabaho sa barko? Kwento namin sayo. Let’s go.",
    meaning: "",
    resources: [
      {
        name: "mm1",
        image: "/images/MM-Ranks.jpg",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/"
      },
      {
        name: "mm2",
        image: "/images/MM-Ranks.jpg",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      }
    ]
  },
  {
    key: 4,
    title: "Wise Seaman",
    id: "wiseaman",
    file: "Wiseaman",
    image: "/images/Wise-Seaman.png",
    description:
      "A “wais” seaman is a wiseman (or woman). Usapang pera, para masulit mo ang pinaghirapan mong dolyares sa barko.",
    meaning: "",
    resources: [
      {
        name: "wise1",
        image: "/images/Wise-Seaman.png",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/"
      },
      {
        name: "wise2",
        image: "/images/Wise-Seaman.png",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      },
      {
        name: "wise3",
        image: "/images/Wise-Seaman.png",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      }
    ]
  },
  {
    key: 5,
    title: "Seaman Stories",
    id: "seaman-stories",
    file: "SeamanStories",
    image: "/images/SStories.jpg",
    description:
      "Ang iba’t ibang kwento ng ating mga Kabaro sa iba’t ibang panig ng mundo! True stories that is a must read.",
    meaning: "",
    resources: [
      {
        name: "ss1",
        image: "/images/SStories.jpg",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/"
      },
      {
        name: "ss2",
        image: "/images/SStories.jpg",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      }
    ]
  },
  {
    key: 6,
    title: "Merch",
    id: "merch",
    file: "Merch",
    image: "/images/Merch.png",
    description:
      "Pag Seaman ka, Dapat proud ka! Wear it with pride. Get the Official Modern Marino Merch here!",
    meaning: "",
    resources: [
      {
        name: "merch1",
        image: "/images/Merch.png",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/"
      },
      {
        name: "merch2",
        image: "/images/Merch.png",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      }
    ]
  },

  {
    key: 7,
    title: "Maritime News",
    id: "maritime-news",
    file: "MaritimeNews",
    image: "/images/Maritime-News.jpg",
    description: "See the latest Maritime related news updates here.",
    meaning: "",
    resources: [
      {
        name: "new1",
        image: "/images/Maritime-News.jpg",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/"
      },
      {
        name: "new2",
        image: "/images/Maritime-News.jpg",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      }
    ]
  },
  {
    key: 8,
    title: "Invest With Us",
    id: "invest",
    file: "Invest",
    image: "/images/DP.jpg",
    description:
      "Di kailangang abutin ng retirement sa barko. Proud seaman pero wise pa rin so Invest with us. Coming soon.",
    meaning: "",
    resources: [
      {
        name: "invest1",
        image: "/images/DP.jpg",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/"
      },
      {
        name: "invest2",
        image: "/images/DP.jpg",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/"
      }
    ]
  }
];

export default pagesItem;
