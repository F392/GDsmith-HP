import "./App.css";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import heroImage from "/hero_web.webp"; 
import heroImageMobile from "/hero_mobile.webp"; 


function App() {
  // 初期値としてウィンドウ幅に応じた画像をセット
  const [bgImage, setBgImage] = useState(window.innerWidth > 768 ? heroImage : heroImageMobile);

  useEffect(() => {
    // ウィンドウのリサイズイベントを監視
    const handleResize = () => {
      // ウィンドウ幅が 768px より大きい場合はデスクトップ画像を使用
      setBgImage(window.innerWidth > 768 ? heroImage : heroImageMobile);
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ関数（コンポーネントがアンマウントされる際にリスナーを削除）
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init("KaXDh5Y6K7Kc58Rzo")
    emailjs
      .send(
        "service_9mlodq8", // EmailJSのService ID
        "template_p57jupy", // EmailJSのTemplate ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company:formData.company,
        },
        "KaXDh5Y6K7Kc58Rzo" // EmailJSのUser ID
      )
      .then((response) => {
        console.log("メールが送信されました", response);
        alert("メールが送信されました！");
        setFormData({ name: "", email: "", message: "", company: "" });
      })
      .catch((error) => {
        console.error("メール送信に失敗しました", error);
        alert("メール送信に失敗しました...");
      });

      emailjs
      .send(
        "service_9mlodq8", // EmailJSのService ID
        "template_2s0o8ba", // EmailJSのTemplate ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company:formData.company,
        },
        "KaXDh5Y6K7Kc58Rzo" // EmailJSのUser ID
      )
      .then((response) => {
        console.log("メールが送信されました", response);
        alert("メールが送信されました！");
        setFormData({ name: "", email: "", message: "", company: "" });
      })
      .catch((error) => {
        console.error("メール送信に失敗しました", error);
        alert("メール送信に失敗しました...");
      });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if(menuOpen){
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <div className="container" onClick={closeMenu}>
      {/* ナビゲーションバー */}
      <nav className="navbar">
        <div className="logo">GDsmith</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">ホーム</a>
          <a href="#services" onClick={toggleMenu}>サービス</a>
          <a href="#about" onClick={toggleMenu}>会社概要</a>
          <a href="#contact" onClick={toggleMenu}>お問い合わせ</a>
        </div>
        {/* ハンバーガーボタン */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <header className="hero"
      style={{
        backgroundImage: `url(${bgImage})`, 
      }}
      >
        <div className="hero-text">
          <h1>テクノロジーで未来を創る</h1>
          <p>- 変革を実現するイノベーション -</p>
          <a href="#contact" className="cta-button">お問い合わせ</a>
        </div>
      </header>

      {/* サービス紹介 */}
      <section id="services" className="services">
        <h2>サービス</h2>
        <div className="service-container">
        {/* サービス1 */}
        <div className="service-item">
          <h3>システム開発</h3>
          <p>
          　お客様のニーズに合わせたシステムを、要件定義から開発、運用まで一貫してサポートします。<br />
          　業務効率化や競争力強化を実現するシステムを迅速に提供します。
          </p>
        </div>

        {/* サービス2 */}
        <div className="service-item">
          <h3>アプリ開発</h3>
          <p>
          　お客様のビジネスに最適なモバイルアプリケーションを、企画から開発、運用までサポートします。<br />
          　ユーザー体験を重視したアプリで、業務効率化や顧客満足度向上を実現します。
          </p>
        </div>

        {/* サービス3 */}
        <div className="service-item">
          <h3>DX推進プロジェクト</h3>
          <p>
          　企業のデジタルトランスフォーメーション（DX）を支援し、業務効率化や新しい価値創造を実現します。<br />
          　最新技術を活用したシステム導入から運用まで、戦略的にサポートし、変革を加速させます。
          </p>
        </div>

        {/* サービス4 */}
        <div className="service-item">
          <h3>ホームページ制作</h3>
          <p>
          　お客様のブランドや目的に合わせた魅力的なホームページを制作します。<br />
          　デザインから機能実装まで、使いやすさと視覚的な訴求力を重視したサイトを提供し、オンラインでの存在感を強化します。
          </p>
        </div>

        {/* サービス5 */}
        <div className="service-item">
          <h3>自社プロダクト</h3>
          <p>
            　水商売の全ての業務をDX化！業界初のデジタル管理へ。<br />
          </p>
          <a href="https://www.gdsmith.net/saihai-lp/public/" className="product1">付け回し管理システム</a>
        </div>
      </div>
      </section>

      {/* 会社概要 */}
      <section id="about" className="about">
        <h2>会社概要</h2>
        <p>　私たちは、スピードと柔軟性を武器に、お客様のビジネスを支えるIT企業です。大手にはできない迅速な対応と、無駄を省いた適正価格で、価値あるソリューションを提供します。<br />
          　小さな会社だからこそ、お客様一人ひとりに寄り添い、本当に必要なものを見極め、最適な提案を行います。決まりきったパッケージではなく、お客様の課題に真剣に向き合い、最も効果的なIT戦略を共に築いていくことが私たちの使命です。<br />
          　私たちは、単なるITベンダーではありません。お客様と共に成長し、挑戦し続ける「パートナー」でありたいと考えています。スピード感ある開発、手の届く価格、そして誠実な提案で、あなたのビジネスを次のステージへと押し上げます。</p>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" className="contact">
        <h2>お問い合わせ</h2>
        <form onSubmit={handleSubmit} className="contact-form">
        <label>会社名</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <label>お名前</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>メールアドレス</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>メッセージ</label>
          <textarea
            rows={10}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">
            送信
          </button>
        </form>
      </section>

      {/* フッター */}
      <footer className="footer">
        We are Information Technology Company. The representative is Mikuni Fukumoto.
      </footer>

      <footer className="footer-mobile">
        We are Information Technology Company.<br />
        The representative is Mikuni Fukumoto.
      </footer>
    </div>
  );
}

export default App;
