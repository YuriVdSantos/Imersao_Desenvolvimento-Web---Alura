var listaFilmes = [ "https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w", "https://media.fstatic.com/hrA7j1j8WFwmPYSCYRasu_iccKI=/290x478/smart/media/movies/covers/2016/11/1476983390_477814.jpg", "https://br.web.img2.acsta.net/pictures/16/01/18/18/57/082205.jpg"]

listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/7/71/Chappie_poster.jpg")

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">");
}