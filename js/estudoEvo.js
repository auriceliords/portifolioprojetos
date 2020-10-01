function veri() {
    var msg= document.getElementById('msg')
    var img= document.getElementById('imagem')
    var pai = document.querySelector('input#casa')

    var limpa = document.getElementById('casa')
    var rec = Number(pai.value)


    switch(rec){
        case 1:
           
            msg.innerHTML = 'MÚ DE ARIES '
            img.src = .'/fotos/aries.png'
            
            document.body.style.backgroundImage = "url('./casas/ar.jpg')";
        
            
        break;
            
        case 2:
            msg.innerHTML = 'ALDEBARAM DE TOURO '
<<<<<<< HEAD
            img.src = .'/fotos/touro.png'
             document.body.style.backgroundImage = "url('../casas/to.jpg')";
=======
            img.src = '/fotos/touro.png'
             document.body.style.backgroundImage = "url('./casas/to.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
        
        break;
        
        case 3:
            msg.innerHTML = 'SAGA DE GÊMIOS'
<<<<<<< HEAD
            img.src = .'/fotos/gemios.png'
             document.body.style.backgroundImage = "url('../casas/ge.jpg')";
=======
            img.src = '/fotos/gemios.png'
             document.body.style.backgroundImage = "url('./casas/ge.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
            
    
        break;

        case 4:
            msg.innerHTML = 'MASCARA DA MORTE , CÂNCER'
<<<<<<< HEAD
            img.src = .'/fotos/cancer.png'
             document.body.style.backgroundImage = "url('../casas/canc.jpg')";
=======
            img.src = '/fotos/cancer.png'
             document.body.style.backgroundImage = "url('./casas/canc.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
        break;

        case 5:
            msg.innerHTML =  ' AIORA DE LEÃO '
<<<<<<< HEAD
            img.src = .'/fotos/leao.png'
             document.body.style.backgroundImage = "url('../casas/leo.jpg')";
=======
            img.src = '/fotos/leao.png'
             document.body.style.backgroundImage = "url('./casas/leo.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
        break;

        case 6:
            msg.innerHTML =  ' DHAKA DE VIRGEN '
<<<<<<< HEAD
            img.src = .'/fotos/virgen.png'
             document.body.style.backgroundImage = "url('../casas/virg.jpg')";
=======
            img.src = '/fotos/virgen.png'
             document.body.style.backgroundImage = "url('./casas/virg.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
        
        break;

        case 7:
            msg.innerHTML =  'DOHKO DE LIBRA '
<<<<<<< HEAD
            img.src = .'/fotos/libra.png'
             document.body.style.backgroundImage = "url('../casas/lib.jpg')";
=======
            img.src = '/fotos/libra.png'
             document.body.style.backgroundImage = "url('./casas/lib.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
       
        break;

        case 8:
            msg.innerHTML =  ' MILO DE ESCPORPIÃO'
<<<<<<< HEAD
            img.src = .'/fotos/escopiao.png'
             document.body.style.backgroundImage = "url('../casas/esc.jpg')";
=======
            img.src = '/fotos/escopiao.png'
             document.body.style.backgroundImage = "url('./casas/esc.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
           
        
        break;

        case 9:
            msg.innerHTML =  'AIOROS DE SARGITÁRIO'
            img.src = .'/fotos/sagitario.png'
             document.body.style.backgroundImage = "url('./casas/sagit.jpg')";
               
        
        break;

        case 10:
            msg.innerHTML =  'SHURA DE CAPRICORNIO '
<<<<<<< HEAD
            img.src = .'/fotos/capricornio.png'
             document.body.style.backgroundImage = "url('../casas/capric.jpg')";
=======
            img.src = '/fotos/capricornio.png'
             document.body.style.backgroundImage = "url('./casas/capric.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
          
        break;
        
        case 11:
            msg.innerHTML =  'CAMUS DE AQUARIO '
<<<<<<< HEAD
            img.src = .'/fotos/aquario.png'
             document.body.style.backgroundImage = "url('../casas/aqu.jpg')";
=======
            img.src = '/fotos/aquario.png'
             document.body.style.backgroundImage = "url('./casas/aqu.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
        
        break;

        case 12:
            msg.innerHTML =  'AFRODITE DE PEIXES '
<<<<<<< HEAD
            img.src = .'/fotos/peixe.png'
             document.body.style.backgroundImage = "url('../casas/pei.jpg')";
=======
            img.src = '/fotos/peixe.png'
             document.body.style.backgroundImage = "url('./casas/pei.jpg')";
>>>>>>> 13b307c5cb0880157e9010299e0657fcbfc1361f
        
        break;


        default:
            msg.innerHTML ='ESCOLHA de 1 a 12 USE PARA SE DIREGIR A AS ../CASAS DO SANTUÁRIO'
            img.src = .'/fotos/auri.png'
            
           
        }
        limpa.value = ''
        limpa.focus()

    }




 
