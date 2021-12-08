var listaFilmes = [
    "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7iBQ4BVTVF5444sUyYZaoA3RT4wNVGW61p1uI6Gg1O8HtKd5T",
    "https://s3-sa-east-1.amazonaws.com/falauniversidades-wordpress-library/f5/fotos/3019_1604_Pauta_TextoImage.jpg"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  