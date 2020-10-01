function veri() {
    var msg= document.getElementById('msg')
    var img= document.getElementById('imagem')
    var pai = document.querySelector('input#casa')

    var limpa = document.getElementById('casa')
    var rec = Number(pai.value)


    switch(rec){
        case 1:
           
            msg.innerHTML = 'MÚ DE ARIES '
            img.src = '/fotos/aries.png'
            
            document.body.style.backgroundImage = "url('../casas/ar.jpg')";
        
            
        break;
            
        case 2:
            msg.innerHTML = 'ALDEBARAM DE TOURO '
            img.src = '/fotos/touro.png'
             document.body.style.backgroundImage = "url('../casas/to.jpg')";
        
        break;
        
        case 3:
            msg.innerHTML = 'SAGA DE GÊMIOS'
            img.src = '/fotos/gemios.png'
             document.body.style.backgroundImage = "url('../casas/ge.jpg')";
            
    
        break;

        case 4:
            msg.innerHTML = 'MASCARA DA MORTE , CÂNCER'
            img.src = '/fotos/cancer.png'
             document.body.style.backgroundImage = "url('../casas/canc.jpg')";
        break;

        case 5:
            msg.innerHTML =  ' AIORA DE LEÃO '
            img.src = '/fotos/leao.png'
             document.body.style.backgroundImage = "url('../casas/leo.jpg')";
        break;

        case 6:
            msg.innerHTML =  ' DHAKA DE VIRGEN '
            img.src = '/fotos/virgen.png'
             document.body.style.backgroundImage = "url('../casas/virg.jpg')";
        
        break;

        case 7:
            msg.innerHTML =  'DOHKO DE LIBRA '
            img.src = '/fotos/libra.png'
             document.body.style.backgroundImage = "url('../casas/lib.jpg')";
       
        break;

        case 8:
            msg.innerHTML =  ' MILO DE ESCPORPIÃO'
            img.src = '/fotos/escopiao.png'
             document.body.style.backgroundImage = "url('../casas/esc.jpg')";
           
        
        break;

        case 9:
            msg.innerHTML =  'AIOROS DE SARGITÁRIO'
            img.src = '/fotos/sagitario.png'
             document.body.style.backgroundImage = "url('../casas/sagit.jpg')";
               
        
        break;

        case 10:
            msg.innerHTML =  'SHURA DE CAPRICORNIO '
            img.src = '/fotos/capricornio.png'
             document.body.style.backgroundImage = "url('../casas/capric.jpg')";
          
        break;
        
        case 11:
            msg.innerHTML =  'CAMUS DE AQUARIO '
            img.src = '/fotos/aquario.png'
             document.body.style.backgroundImage = "url('../casas/aqu.jpg')";
        
        break;

        case 12:
            msg.innerHTML =  'AFRODITE DE PEIXES '
            img.src = '/fotos/peixe.png'
             document.body.style.backgroundImage = "url('../casas/pei.jpg')";
        
        break;


        default:
            msg.innerHTML ='ESCOLHA de 1 a 12 USE PARA SE DIREGIR A AS ../CASAS DO SANTUÁRIO'
            img.src = '/fotos/auri.png'
            
           
        }
        limpa.value = ''
        limpa.focus()

    }




 
