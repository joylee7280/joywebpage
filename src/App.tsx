function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-branding">
          <span>Joy Lee</span>
        </div>
        <nav className="site-nav">
          <a href="#home">Home</a>
          <a href="#about">Project</a>
          <a href="#experience">Work Experience</a>
          <a href="#skills">Skill</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <div className="banner" id="home">
        <div className="banner-content">
          <p className="eyebrow">Hi, I'm Joy Lee</p>
          <h1>Machine Learning & Biosensor Engineer</h1>
          <p className="subtitle">國立臺灣大學 生醫電子與資訊學研究所</p>
          <a href="#experience" className="btn">View My Experience</a>
        </div>
      </div>

      <section id="about">
        <h2>Education</h2>
        <div className="info-item">
          <div className="date">2020/09 - 2025/06</div>
          <div className="content">
            <h3>國立臺灣大學</h3>
            <p>電機工程學系、生醫電子與資訊學研究所 (大學日間就讀中)</p>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2>Work Experience</h2>

        <div className="info-item">
          <div className="date">2024/02 - 2024/08</div>
          <div className="content">
            <h3>業務發展處實習生 (軟體工程師)</h3>
            <p className="company">和椿科技股份有限公司 (Coplus)</p>
            <ul>
              <li>研讀各家機器人廠商 SDK 開發文件並執行功能測試。</li>
              <li>使用 <strong>Python Tkinter</strong> 設計機器人測試用 GUI 介面。</li>
              <li>以 <strong>Django</strong> 建置 Web 端後台，實現多台服務型機器人遠端操作與監控。</li>
              <li>實地導入場域，建立環境地圖並設置導航目標點位。</li>
            </ul>
          </div>
        </div>

        <div className="info-item">
          <div className="date">2020/07 - 2021/01</div>
          <div className="content">
            <h3>行政助理 / 兼職教練</h3>
            <p className="company">乒乒乓乓桌球館</p>
            <p>負責個別與團體課程教學，並處理排課、繳費等行政運作事宜。</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Python & ML</h3>
            <div className="tags">
              <span>NumPy</span><span>Pandas</span><span>Matplotlib</span><span>Scikit-learn</span>
              <span>PyTorch</span><span>TensorFlow</span><span>Django</span><span>Requests</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Languages & Dev</h3>
            <div className="tags">
              <span>C++</span><span>C</span><span>MySQL</span><span>HTML/CSS</span>
              <span>JavaScript</span><span>jQuery</span><span>Git</span>
            </div>
          </div>
          <div className="skill-card">
            <h3>Bio-Info & Hardware</h3>
            <div className="tags">
              <span>QIIME2</span><span>Linux</span><span>Arduino</span><span>ImageJ</span><span>SERS Analysis</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Project Highlights</h2>
        <div className="project">
          <h3>生物資訊分析平台開發 (專題研究)</h3>
          <p>以 <strong>Django</strong> 為框架，學習 MVC 架構，並結合 <strong>subprocess</strong> 執行 Linux 命令，處理生物資訊運算流程。</p>
        </div>
        <div className="project">
          <h3>SERS 微生物菌相分析 (台大/精準醫學中心)</h3>
          <p>利用 <strong>QIIME2</strong> 與 <strong>Linux</strong> 環境進行差異豐度分析，並透過 Django 建立視覺化平台，榮獲研習營成果發表「佳作」。</p>
        </div>
        <div className="project">
          <h3>Arduino 體能計數裝置 (生醫工程實驗)</h3>
          <p>整合 <strong>肌電模組 (EMG)</strong> 與 <strong>App Inventor</strong>，設計可監測肌肉疲勞指數之穿戴式裝置。</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>📧 Email: chiaoyulee7280@gmail.com</p>
        <p>📍 Location: 台北市 / 接受遠端工作</p>
        <p>📅 可上班日: 2026/09/01</p>
      </section>
    </>
  )
}

export default App
