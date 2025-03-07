import React, { useState } from 'react';
import { 
  Database, 
  Brain, 
  LineChart, 
  Code2, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  FileDown,
  Award,
  Briefcase,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Shield,
  Medal,
  MapPin,
  X,
  ExternalLink,
  GitBranch,
  Play,
  Users,
  HardDrive,
  Wrench
} from 'lucide-react';



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            Javier Collado
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-6">
            Data Scientist/Data Engineer/ML Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transforming complex data into actionable insights and building intelligent solutions
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://github.com/JCollado-Data" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/javierc-datasci" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:jcollado.data@gmail.com"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a 
            href="https://jcollado-data.github.io/JCollado-Portfolio/images/JavierColladoCV.pdf" 
            download= "JavierColladoCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>
        </div>
        <ChevronDown className="w-6 h-6 absolute bottom-8 animate-bounce text-gray-600" />
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Database className="w-8 h-8" />}
              title="Data Engineering"
              description="ETL Pipelines, Data Warehousing, AWS, OCI, GCP"
            />
            <SkillCard 
              icon={<Brain className="w-8 h-8" />}
              title="Machine Learning"
              description="Predictive Modeling, Deep Learning, NumPy, SciPy, Pandas, Scikit-learn, TensorFlow, PyTorch"
            />
            <SkillCard 
              icon={<LineChart className="w-8 h-8" />}
              title="Data Analysis"
              description="Statistical analysis, Data Modelling, Data Visualization, Tableau, JMP"
            />
            <SkillCard 
              icon={<Code2 className="w-8 h-8" />}
              title="Programming"
              description="Python, R, SQL, C++, Powershell, Bash, Matlab"
            />
            <SkillCard 
              icon={<HardDrive className="w-8 h-8" />}
              title="Data Management"
              description="SQL, No-SQL, SSMS, Postgres, Cloud Platforms"
            />
            <SkillCard 
              icon={<Wrench className="w-8 h-8" />}
              title="Tools & Platforms"
              description="Jupyter Notebook, VS Code, JIRA, ServiceNow, Kubernetes, Docker"
            />
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-0.5">
          <h1 className="underline text-3xl font-bold text-center mb-6 text-white"> Professional Experince</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Professional Experience */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-2 text-white">Technology</h2>
              <p className="text-gray-300 text-center mb-6 text-sm">
                Data Science & Machine Learning
              </p>
              <ExperienceCarousel 
                experiences={[
                  {
                    title: "Software Developer",
                    company: "Jack In The Box",
                    period: "2024 - Present",
                    location: "San Diego, CA",
                    description: "Develop software solutions for Resturant Front and Back of House.",
                    achievements: [
                      "Completed 46 sprints varying in lenght from 1-4 weeks",
                      "Established new technical documentations policies",
                      "Rewrote old code, improving efficency by 15%"
                    ]
                  },
                  {
                    title: "Sr Data Admin",
                    company: "Jack In the Box",
                    period: "2023 - 2024",
                    location: "San Diego, CA",
                    description: "Supervised Resturant Menu System database.",
                    achievements: [
                      "Reduced average service ticket resolutions time by 25% ",
                      "Directed the POS and Menu Integration for 12 new store openings",
                      "Introduced automated testing protocols, reducing testing time by 20%"
                    ]
                  },
                  {
                    title: "Data Scientist (Contract)",
                    company: "Sunovian Pharmacuticals",
                    period: "2022 - 2023",
                    location: "Boston, MA (Remote)",
                    description: "Assist in database migration and testing.",
                    achievements: [
                      "Performed A-B Testing.",
                      "Developed 18 new training documents.",
                      "Established 6 Key dashboards for stakeholders to track product development."
                    ]
                  }
                ]}
                compact={true}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-center mb-2 text-white">Scientific/Medical</h2>
              <p className="text-gray-300 text-center mb-6 text-sm">
                Scientist & Chemical Engineer
              </p>
              <ExperienceCarousel 
                experiences={[
                  {
                    title: "Manufacturing Scientist",
                    company: "Ionis Pharmacuticals",
                    period: "2021 - 2022",
                    location: "Carlsbad, CA",
                    description: "Performed drug synthization and statistical quaility assurance. ",
                    achievements: [
                      "Validated data for 3 FDA drug submissions, ensuring regulatory compliance",
                      "Revised 10 SOPs improving synthesization process",
                      "Increased data infrastructure improving operations by 20%"
                    ]
                  },
                  {
                    title: "Lab Operations lead",
                    company: "Access Biologicals (Now Grifols Biologicals)",
                    period: "2020 - 2021",
                    location: "Vista, CA",
                    description: "Manage lab operations and data management",
                    achievements: [
                      "Created SQL databases, reducing data retrieval times by 30%",
                      "Reduced operations costs by 18% through process analysis and procurement optimization",
                      "Developed 17 SOPs and training guides, enhancing team readiness and operational consistency"
                    ]
                  },
                  {
                    title: "Lab Tech",
                    company: "Access Biologicals (Now Grifols Biologicals)",
                    period: "2019 - 2020",
                    location: "Vista, CA",
                    description: "Conducted plasma processing and virological studies.",
                    achievements: [
                      "Assisted in the manufacture of convalecent covid plasma",
                      "Processed 38 batches of plasma for commerical use",
                      "Assisted in virological studies in BSL-2 level laboratory"
                    ]
                  }
                ]}
                compact={true}
              />
            </div>

            {/* Military Experience */}
            <div>
              <h2 className="text-2xl font-bold text-center mb-2 text-white">Military Service</h2>
              <p className="text-gray-300 text-center mb-6 text-sm">
                United States Marine Corps Veteran
              </p>
              <ExperienceCarousel 
                experiences={[
                  {
                    title: "Electro-Optical Ordnance Repairer",
                    company: "1st Battalion 1st Marines",
                    period: "2012 - 2017",
                    location: "Camp Pendleton, CA",
                    description: "Maintaine and repair infantry lasers, optics, missile system and other fire control equipment.",
                    achievements: [
                      "Assisted in the revision of the Javalin missile system Technical Manual with Lockhead Martin",
                      "3 successful overseas deployments",
                      "Worked closly with Raytheon in Saber Missile system training across Pendleton"
                    ],
                    isMilitary: true
                  },
                  {
                    title: "Armory Maintnance Cheif",
                    company: "1st Battalion 1st Marines",
                    period: "2015 - 2017",
                    location: "Camp Pendleton, CA",
                    description: "Maintain all data and operations for the battalion armory.",
                    achievements: [
                      "Managed all data and records for the battalion armory vauling over 8 Million dollars",
                      "Managed armory invetory while conducting operations across 3 countries at once",
                      "Supervised and trained 40 Marines under the Battalion armory"
                    ],
                    isMilitary: true
                  }
                ]} 
                theme="military"
                compact={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold underline text-center mb-4 text-gray-800">Education</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Degrees and professional certifications from National University, UCSD, UC Davis, John Hopkins, Stanford, Google, Oracle, AWS and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificateCard 
              title="Degrees and Post Graduate Work"
              issuer=""
              date="Bachelor of Science & Post Grad Certificate"
              image="/JCollado-Portfolio/public/images/diploma.jpg"
              certificates={[
                { name: "Associate of Science Degree", pdfPath: "/JCollado-Portfolio/public/images/degree/Asdiploma.pdf" },
                { name: "Bachelor of Science Degree", pdfPath: "/JCollado-Portfolio/public/images/degree/Bachelor_Degree.pdf" },
                { name: "Post Graduate Certificate", pdfPath: "/JCollado-Portfolio/public/images/degree/UCSD_DataScienceCert.pdf" }
              ]}
            />
            <CertificateCard 
              title="Data Management"
              issuer=""
              date="SQL, Cloud"
              image="/JCollado-Portfolio/public/images/datamanagement.jpg"
              certificates={[
                { name: "Oracle Certified Foundations Associate", pdfPath: "/JCollado-Portfolio/public/images/datamanagement/OCIFoundationCertificate.pdf" },
                { name: "SQL for Data Science", pdfPath: "/JCollado-Portfolio/public/images/datamanagement/UCDavisSQL.pdf" }
              ]}
            />
            <CertificateCard 
              title="Data Analytics"
              issuer=""
              date="Data Analytics, Data visulization, Statistics"
              image="/JCollado-Portfolio/public/images/dataanalytics.jpg"
              certificates={[
                { name: "Google Data Analytics", pdfPath: "/JCollado-Portfolio/public/images/dataanalytics/GoogleDataAnalytics.pdf" },
                { name: "Data Visualization with Tableau", pdfPath: "/JCollado-Portfolio/public/images/dataanalytics/UCDavisFullDataVisualizationwithTableau.pdf" },
                { name: "Creating Dashboards and Storytelling with Tableau", pdfPath: "/JCollado-Portfolio/public/images/dataanalytics/UCDavisCreatingDashboardsandStorytellingwithTableau.pdf" },
                { name: "Essential Design Principles for Tableau", pdfPath: "/JCollado-Portfolio/public/images/dataanalytics/UCDavisEsstentialDesignPrinciplesforTableau.pdf" },
                { name: "Fundamentals of Visualization with Tableau", pdfPath: "/JCollado-Portfolio/public/images/dataanalytics/UCDavisFundamentalsofVisualizationwithTableau.pdf" },
                { name: "Visual Analytics with Tableau", pdfPath: "/JCollado-Portfolio/public/images/dataanalytics/UCDavisVisualAnalyticsWithTableau.pdf" }
              ]}
            />
            <CertificateCard 
              title="Machine Learning"
              issuer=""
              date="Cloud, Big Data, Data Modeling"
              image="/JCollado-Portfolio/public/images/machinelearning.jpg"
              certificates={[
                { name: "Google CLoud and Big Data and Machine Learning Fundamentals", pdfPath: "/JCollado-Portfolio/public/images/machinelearning/GoogleCloudBigDataandMachineLearningFundamentals.pdf" },
                { name: "Fundamentals of Quantitative Modeling", pdfPath: "/JCollado-Portfolio/public/images/machinelearning/StanfordSupervisedMachineLearning_RegressionandClassification.pdf" },
                { name: "Supervised Machine Learning: Regression and Classification", pdfPath: "/JCollado-Portfolio/public/images/machinelearning/UPennFundamentalsofQuantitativeModeling.pdf" }
              ]}
            />
            <CertificateCard  
              title="Public Health"
              issuer=""
              date="Epidemology, FEMA, WHO"
              image="/JCollado-Portfolio/public/images/publichealth.jpg"
              certificates={[
                { name: "Infection Prevention and Control for Novel Coronavirus", pdfPath: "/JCollado-Portfolio/public/images/publichealth/COVID-19-IPC-EN_ConfirmationOfParticipation.pdf" },
                { name: "Data and Health Indicators in Public Health Practice", pdfPath: "/JCollado-Portfolio/public/images/publichealth/DataandHealthIndicatorsinPublicHealthPracticeJohnsHopkins.pdf" },
                { name: "Epidemiology in Public Health Practice", pdfPath: "/JCollado-Portfolio/public/images/publichealth/EpidemiologyinPublicHealthPracticeJohnsHopkins.pdf" },
                { name: "Essential Epidemiologic Tools for Public Health Practice", pdfPath: "/JCollado-Portfolio/public/images/publichealth/EssentialEpidemiologicToolsforPublicHealthJohnsHopkins.pdf" },
                { name: "Health Communication", pdfPath: "/JCollado-Portfolio/public/images/publichealth/healthcommunication.pdf" },
                { name: "Outbreaks and Epidemics", pdfPath: "/JCollado-Portfolio/public/images/publichealth/OutbreaksandEpidemicsJonhsHopkins.pdf" },
                { name: "Public Health 101", pdfPath: "/JCollado-Portfolio/public/images/publichealth/public-health-101.pdf" },
                { name: "Surveillance Systems: Analysis, Dissemination, and Special Systems", pdfPath: "/JCollado-Portfolio/public/images/publichealth/SurveillancesystemsAnalysisdisseminationandspecialsystems.pdf" },
                { name: "Surveillance Systems: The Building Blocks", pdfPath: "/JCollado-Portfolio/public/images/publichealth/SurveillanceSystemsThebuildingBlocksJohnsHopkins.pdf" }
              ]}
            />
            <CertificateCard 
              title="Life Sciences"
              issuer=""
              date="Genetics, Genomics, NGS"
              image="/JCollado-Portfolio/public/images/lifescience.jpg"
              certificates={[
                { name: "Genomic Data Science with Galaxy", pdfPath: "/JCollado-Portfolio/public/images/lifesciences/JohnHopkinsGenomicDataSciencewithGalaxy.pdf" },
                { name: "Introduction to Genomic Technologies", pdfPath: "/JCollado-Portfolio/public/images/lifesciences/JohnHopkinsIntroductiontoGenomicTechnologies.pdf" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A collection of data science projects showcasing expertise in machine learning, deep learning, and data analytics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Credit Risk Analysis"
              description="Evaluating different crieteria to determine Credit Risk utilizing multiple models."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              tags={['Python', 'Jupyter Notebook', 'Pandas', 'Numpy']}
              link="#"
            />
            <ProjectCard 
              title="Neural Network Models"
              description="The purpose of this project is to analysis the AlphabetSoupCharity 'ASC' and determine which fund applicants will be successful and be best suited for ASC funds."
              image="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
              tags={['Pandas', 'TensorFlow', 'SciKit Learn', 'Jupyter Notebook']}
              link="#"
            />
            <ProjectCard 
              title="Time Series Forecasting"
              description="Created an ensemble forecasting model for retail sales prediction, combining Prophet, LSTM, and traditional statistical methods for 30% improved accuracy."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              tags={['Prophet', 'Pandas', 'Plotly', 'LSTM']}
              link="#"
            />
            <ProjectCard 
              title="Computer Vision Pipeline"
              description="Implemented a real-time object detection system for manufacturing quality control, reducing defect escape rate by 75% using YOLOv5 and custom post-processing."
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
              tags={['PyTorch', 'OpenCV', 'CUDA', 'YOLOv5']}
              link="#"
            />
            <ProjectCard 
              title="Recommendation Engine"
              description="Built a hybrid recommendation system combining collaborative filtering and content-based approaches, increasing user engagement by 28% and conversion by 15%."
              image="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=800"
              tags={['Spark', 'scikit-learn', 'Redis', 'FastAPI']}
              link="#"
            />
            <ProjectCard 
              title="Anomaly Detection System"
              description="Developed an unsupervised anomaly detection system for network security, identifying previously unknown attack patterns with 96% precision."
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
              tags={['Isolation Forest', 'Kafka', 'ELK Stack']}
              link="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ExperienceCarousel({ experiences, theme = 'default', compact = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentExperience = experiences[currentIndex];
  const isMilitary = theme === 'military';

  return (
    <div className="relative">
      <div className={`${isMilitary ? 'bg-gray-800 border border-gray-700' : 'bg-gray-800 border border-gray-700'} rounded-lg shadow-sm ${compact ? 'p-4' : 'p-8'}`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
          <div>
            <h3 className={`text-lg font-bold text-white mb-1`}>
              {currentExperience.title}
            </h3>
            <div className={`flex items-center gap-2 text-gray-300 mb-1`}>
              {isMilitary ? <Shield className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
              <span className="text-sm">{currentExperience.company}</span>
            </div>
          </div>
          <div className={`flex flex-col items-start md:items-end text-gray-300`}>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{currentExperience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              {isMilitary ? <MapPin className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
              <span className="text-sm">{currentExperience.location}</span>
            </div>
          </div>
        </div>
        <p className={`text-gray-300 text-sm mb-2`}>
          {currentExperience.description}
        </p>
        <div>
          <h4 className={`font-medium text-white text-sm mb-1`}>
            {isMilitary ? 'Achievements & Commendations:' : 'Key Achievements:'}
          </h4>
          <ul className="list-disc list-inside space-y-0.5">
            {currentExperience.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-300 text-sm">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-gray-800 text-gray-300 hover:text-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Previous experience"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-gray-800 text-gray-300 hover:text-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Next experience"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-blue-400'
                : 'bg-gray-600'
            }`}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ title, issuer, date, image, certificates }) {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 cursor-pointer"
      >
        <div className="relative h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-1  [text-shadow:2px_2px_2px_black]"> 
               {title}
            </h3>
            <p className="text-white/90 text-sm">{date}</p>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{issuer} • {date}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
              <div className="p-4 max-h-[80vh] overflow-y-auto">
                {certificates.map((cert, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-lg font-medium text-gray-700 mb-2">{cert.name}</h4>
                    <div className="relative aspect-[16/9] w-full border border-gray-300 rounded-lg overflow-hidden">
                      <iframe 
                        src={cert.pdfPath} 
                        className="w-full h-full"
                        frameBorder="0"
                      />
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectCard({ title, description, image, tags, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectDetails = {
    overview: "This project showcases the implementation of advanced machine learning techniques to solve real-world problems. While comparing different models I have Identified the AdaBoost Classifier as the most optimal for this dataset.",
    challenges: [
      "Handling large-scale data processing efficiently",
      "Implementing real-time prediction capabilities",
      "Optimizing model performance for production",
    ],
    technologies: {
      frontend: ["N/A"],
      backend: ["Python", "Juypter Notebook", "Pandas"],
      deployment: ["Github"],
    },
    metrics: [
      { label: "Balance Accuracy Score", value: "0.93166" },
      { label: "Percision Score", value: "0.99" },
      { label: "Recall Score", value: "0.94" },
    ],
    team: {
      size: 1,
      roles: ["Data Scientist"],
    },
    repoUrl: "https://github.com/JCollado-Data/Credit_Risk_Analysis",
  };

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  {projectDetails.demoUrl && (
                    <a 
                      href={projectDetails.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <Play className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {projectDetails.repoUrl && (
                    <a 
                      href={projectDetails.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <GitBranch className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Image */}
              <div className="relative aspect-video w-full">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Project Overview */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Overview</h4>
                <p className="text-gray-600">{projectDetails.overview}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {projectDetails.metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Challenges</h4>
                <ul className="list-disc list-inside space-y-2">
                  {projectDetails.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-600">{challenge}</li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Technology Stack</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Frontend</h5>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.frontend.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Backend</h5>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.backend.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Deployment</h5>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.deployment.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <Users className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-800">Team Size: {projectDetails.team.size}</div>
                  <div className="text-sm text-gray-600">
                    Roles: {projectDetails.team.roles.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;