# Galatasaray - Offizielle Fan-Website

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galatasaray - Fan-Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Galatasaray SK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active"><a class="nav-link" href="#home">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#about">Über uns</a></li>
        <li class="nav-item"><a class="nav-link" href="#players">Spieler</a></li>
        <li class="nav-item"><a class="nav-link" href="#news">Neuigkeiten</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Kontakt</a></li>
        <li class="nav-item"><a class="nav-link" href="#impressum">Impressum</a></li>
        <li class="nav-item"><a class="nav-link" href="#agb">AGB</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero bg-primary text-white text-center py-5">
    <div class="container">
      <h1>Willkommen bei Galatasaray!</h1>
      <p>Die offizielle Fan-Website von Galatasaray SK</p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-5 bg-light">
    <div class="container">
      <h2>Über uns</h2>
      <p>Galatasaray ist ein führender Fußballverein in der Türkei, bekannt für seine Erfolge und seine leidenschaftlichen Fans. Die Vereinsgeschichte reicht weit zurück, und heute ist Galatasaray ein Symbol für den türkischen Fußball.</p>
    </div>
  </section>

  <!-- Players Section -->
  <section id="players" class="py-5">
    <div class="container">
      <h2>Unsere Spieler</h2>
      <!-- Karussell für Spieler -->
      <div id="playerCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="player1.jpg" class="d-block w-100" alt="Spieler 1">
            <div class="carousel-caption d-none d-md-block">
              <h5>Spieler 1</h5>
              <p>Position: Stürmer</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="player2.jpg" class="d-block w-100" alt="Spieler 2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Spieler 2</h5>
              <p>Position: Mittelfeld</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#playerCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#playerCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

  <!-- News Section -->
  <section id="news" class="py-5 bg-light">
    <div class="container">
      <h2>Neuigkeiten</h2>
      <p>Hier findest du die neuesten Nachrichten rund um Galatasaray, einschließlich Spielberichten, Vereinsentwicklungen und mehr.</p>
      <ul>
        <li><a href="#">Nachricht 1: Galatasaray gewinnt das letzte Spiel!</a></li>
        <li><a href="#">Nachricht 2: Neuer Trainer für Galatasaray!</a></li>
      </ul>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section id="contact" class="py-5">
    <div class="container">
      <h2>Kontakt</h2>
      <form action="/submit" method="post">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">E-Mail</label>
          <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Nachricht</label>
          <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Absenden</button>
      </form>
    </div>
  </section>

  <!-- Legal Pages -->
  <section id="impressum" class="py-5 bg-light">
    <div class="container">
      <h2>Impressum</h2>
      <p>Die folgenden Informationen sind gemäß den geltenden Gesetzen erforderlich:</p>
      <ul>
        <li><strong>Name des Unternehmens:</strong> Galatasaray SK</li>
        <li><strong>Adresse:</strong> Türk Telekom Arena, 34403, Istanbul, Türkei</li>
        <li><strong>Telefonnummer:</strong> +90 212 727 2323</li>
        <li><strong>E-Mail:</strong> info@galatasaray.org</li>
      </ul>
    </div>
  </section>

  <section id="agb" class="py-5">
    <div class="container">
      <h2>AGB (Allgemeine Geschäftsbedingungen)</h2>
      <p>Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung dieser Website:</p>
      <ul>
        <li>Die Website darf nur für persönliche, nicht-kommerzielle Zwecke genutzt werden.</li>
        <li>Die Betreiber übernehmen keine Haftung für Inhalte auf der Website.</li>
        <li>Urheberrechte: Alle Inhalte sind urheberrechtlich geschützt.</li>
        <li>Änderungen der Website und ihrer Inhalte sind jederzeit möglich.</li>
      </ul>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2025 Galatasaray SK. Alle Rechte vorbehalten.</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="https://www.instagram.com/galatasaraysk/" class="text-white">Instagram</a></li>
      <li class="list-inline-item"><a href="https://twitter.com/GalatasaraySK" class="text-white">Twitter</a></li>
      <li class="list-inline-item"><a href="https://www.facebook.com/GalatasaraySK" class="text-white">Facebook</a></li>
      <li class="list-inline-item"><a href="https://www.youtube.com/user/galatasaray" class="text-white">YouTube</a></li>
    </ul>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
# Galatasaray - Offizielle Fan-Website

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galatasaray - Fan-Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      color: #333;
    }
    .navbar {
      background-color: #f1c40f;
    }
    .hero {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('galatasaray-stadium.jpg') no-repeat center center;
      background-size: cover;
      color: #fff;
      padding: 100px 0;
    }
    .btn-primary {
      background-color: #f1c40f;
      border: none;
    }
    .carousel-inner img {
      height: 400px;
      object-fit: cover;
    }
    .section-header {
      text-align: center;
      margin-bottom: 30px;
      font-size: 2em;
      color: #e67e22;
    }
    .section-content {
      text-align: center;
    }
    .footer {
      background-color: #333;
      color: #fff;
      padding: 20px 0;
      text-align: center;
    }
    .footer a {
      color: #fff;
      margin: 0 15px;
      text-decoration: none;
    }
    .footer a:hover {
      color: #e67e22;
    }
    .dark-mode {
      background-color: #2c3e50;
      color: #ecf0f1;
    }
    .light-mode {
      background-color: #f4f4f4;
      color: #333;
    }
    .social-icons a {
      font-size: 24px;
      margin: 0 10px;
      color: #f1c40f;
    }
  </style>
</head>
<body class="light-mode" id="body">

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">Galatasaray SK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active"><a class="nav-link" href="#home">🏠 Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#about">👥 Über uns</a></li>
        <li class="nav-item"><a class="nav-link" href="#players">⚽ Spieler</a></li>
        <li class="nav-item"><a class="nav-link" href="#news">📰 Neuigkeiten</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">📩 Kontakt</a></li>
        <li class="nav-item"><a class="nav-link" href="#impressum">📑 Impressum</a></li>
        <li class="nav-item"><a class="nav-link" href="#agb">📃 AGB</a></li>
        <li class="nav-item"><a class="nav-link" href="javascript:void(0)" onclick="toggleDarkMode()">🌙 Dark Mode</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero text-center text-white">
    <div class="container">
      <h1>Willkommen bei Galatasaray! 🦁</h1>
      <p>Die offizielle Fan-Website von Galatasaray SK – Mehr als nur Fußball!</p>
      <a href="#about" class="btn btn-primary">Erfahre mehr</a>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-5">
    <div class="container">
      <h2 class="section-header">Über uns</h2>
      <p class="section-content">Galatasaray ist nicht nur ein Fußballverein, sondern ein Symbol für den türkischen Sport. Gegründet im Jahr 1905, ist der Verein nicht nur für seine Erfolge auf dem Spielfeld bekannt, sondern auch für die Leidenschaft seiner Fans und die Werte, die er vertritt.</p>
    </div>
  </section>

  <!-- Players Section -->
  <section id="players" class="py-5 bg-light">
    <div class="container">
      <h2 class="section-header">Unsere Spieler ⚽</h2>
      <!-- Player Carousel -->
      <div id="playerCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="player1.jpg" class="d-block w-100" alt="Spieler 1">
            <div class="carousel-caption d-none d-md-block">
              <h5>🦁 Spieler 1</h5>
              <p>Position: Stürmer</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="player2.jpg" class="d-block w-100" alt="Spieler 2">
            <div class="carousel-caption d-none d-md-block">
              <h5>⚡ Spieler 2</h5>
              <p>Position: Mittelfeld</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#playerCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Vorherige</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#playerCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Nächste</span>
        </button>
      </div>
    </div>
  </section>

  <!-- News Section -->
  <section id="news" class="py-5">
    <div class="container">
      <h2 class="section-header">Neuigkeiten 📰</h2>
      <ul>
        <li><a href="#">🏆 Galatasaray gewinnt das letzte Spiel gegen Fenerbahce!</a></li>
        <li><a href="#">📢 Neuer Transfer: Spieler X kommt zu Galatasaray!</a></li>
      </ul>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-5 bg-light">
    <div class="container">
      <h2 class="section-header">Kontakt 📩</h2>
      <form action="/submit" method="post">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">E-Mail</label>
          <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Nachricht</label>
          <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Absenden</button>
      </form>
    </div>
  </section>

  <!-- Legal Pages -->
  <section id="impressum" class="py-5">
    <div class="container">
      <h2 class="section-header">Impressum 📑</h2>
      <p>Die folgenden Informationen sind gemäß den geltenden Gesetzen erforderlich:</p>
      <ul>
        <li><strong>Name des Unternehmens:</strong> Galatasaray SK</li>
        <li><strong>Adresse:</strong> Türk Telekom Arena, 34403, Istanbul, Türkei</li>
        <li><strong>Telefonnummer:</strong> +90 212 727 2323</li>
        <li><strong>E-Mail:</strong> info@galatasaray.org</li>
      </ul>
    </div>
  </section>

  <section id="agb" class="py-5 bg-light">
    <div class="container">
      <h2 class="section-header">AGB 📃</h2>
      <ul>
        <li>Die Website darf nur für persönliche, nicht-kommerzielle Zwecke genutzt werden. 🚫</li>
        <li>Die Betreiber übernehmen keine Haftung für Inhalte auf der Website. ⚖️</li>
        <li>Alle Inhalte sind urheberrechtlich geschützt. 🔒</li>
        <li>Änderungen der Website und ihrer Inhalte sind jederzeit möglich. 🔄</li>
      </ul>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="footer">
    <p>&copy; 2025 Galatasaray SK. Alle Rechte vorbehalten.</p>
    <div class="social-icons">
      <a href="https://www.instagram.com/galatasaraysk/" class="fab fa-instagram"></a>
      <a href="https://twitter.com/GalatasaraySK" class="fab fa-twitter"></a>
      <a href="https://www.facebook.com/GalatasaraySK" class="fab fa-facebook"></a>
      <a href="https://www.youtube.com/user/galatasaray" class="fab fa-youtube"></a>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    function toggleDarkMode() {
      var body = document.getElementById("body");
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");
    }
  </script>
</body>
</html>
