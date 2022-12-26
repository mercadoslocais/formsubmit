const urlParams = new URLSearchParams(window.location.search);
var urlArray  = urlParams.toString();

console.log(urlArray); // teste
var iParams = urlArray.split('&');
console.log(iParams[0]); // teste
iParams = iParams[0].split('=');
console.log(iParams[0]); // teste

if($('#related-cards').length) {
	/* Config Vars */
	validateState = false;
	/* Required message */
	validateRequiredMsg = "Campo de preenchimento obrigatório";

	function validate() {
		$('form input[type="text"], form input[type="tel"], form input[type="email"], form select').each(function(){
			if ($(this).prop('required') || $(this).hasClass('validate-required') && $.trim($(this).val()) == '') {
				$(this).addClass('invalid');
				// $(this).focus();
				/*Mensagem de validação*/
				$('.validate_message').html(validateRequiredMsg);
				/*Estado da validação*/
				validateState = false; 
				return false;
			}
			else {
				$(this).removeClass('invalid');
				/*Estado da validação*/
				validateState = true;
			}
		});
	}

	// FUNCAO PREENCHER FORMULARIO
	function preencheForm() {
		$("form").each(function(){
			var nome          = $.trim($('form').find('input.cover__title').val());
			var tel           = $('form').find('input[type="tel"]').val();
			var image         = $('form').find('img').attr('src');
			var subtitle      = $.trim($('form').find('input.cover__subtitle').val());
			var msg           = $('#ContactForm1_contact-form-email-message');

			var n             =   '<div class="card__image bg--dark" style="display: flex;">' + '\n';
			n                 +=  '<span class="cover__title">' + nome.toUpperCase() + '</span>' + '\n';
			n                 +=  '<span class="cover__subtitle">' + subtitle + '</span>' + '\n';
			n                 +=  '<img alt="Cover" src="' + image + '" style="opacity: 0.5"/>' + '\n\n';
			n                 +=  'WhatsApp: ' + tel +'\n';
			msg.val(n.toString());
		});
	}

	if (iParams[0] == 'purchase') {
		// APLICAR HASH NOS LINKS COM A CLASSE "CUSTOMER"
		$('a.customer').each(function(){
			var link    = $(this).prop('href');
			var param   = urlParams.toString();

			// PASSA PARAMETRO PARA URLS DOS LINKS
			$(this).prop('href', link + '?' + param);
		});
		$('#shoplink, #shop').addClass('hidden');

		// MONTAR MASONRY DE IMAGENS
		$('.separator').each(function() {
			var elem						=	$(this);
			var img 						=	elem.find('img').attr('src');
			var title						= elem.find('img').attr('title');
			var alt							= elem.find('img').attr('alt');

			if(title == '' || title == undefined) {
				title = 'Arte Ilustrativa';
			}		
			if(alt == '' || alt == undefined) {
				alt   = 'Ilustração';
			}
			
			var item 						=	'<div class="col-md-4 col-xs-6 masonry__item" data-masonry-filter="'+ alt +'">';
			var item						= item + '<a href="javascript:void(0)" class="modal-trigger" data-modal-index="buy-card__image">';
			var item						= item + '<img alt="pic" src="' + img + '" />';
			var item						= item + '</a>';
			var item						= item + '</div>';
			
			$(this).remove();
			$('.masonry__container').append(item);
		});

		// HIDDEN_CARD
		var a = $(document.createElement('span')).addClass('hidden_card').css('display','none');
		var b = $(document.createElement('div')).addClass('card__image bg--dark').css('display', 'flex');
		var c =   '<span class="cover__title"></span>';
		c     +=  '<span class="cover__subtitle"></span>';
		c     +=  '<img src="" style="opacity: 0.5" />';
		b.html(c);
		a.html(b);
		a.appendTo('.masonry-contained');
	}
	else {
		// MONTAR MASONRY DE IMAGENS [COM MODAL-TRIGGER="OFFER-CARD__IMAGE"]
		$('.separator').each(function() {
			var elem            = $(this);
			var img             = elem.find('img').attr('src');
			var title           = elem.find('img').attr('title');
			var alt             = elem.find('img').attr('alt');
			var shoplink        = $('#shoplink').prop('href');

			if(title == '' || title == undefined) {
				title = 'Arte Ilustrativa';
			}   
			if(alt == '' || alt == undefined) {
				alt = 'Ilustração';
			}
			
			var item            = '<div class="col-md-4 col-xs-6 masonry__item" data-masonry-filter="'+ alt +'">';
			var item            = item + '<a href="javascript:void(0)" class="modal-trigger" data-modal-index="offer-card__image">';
			var item            = item + '<img alt="pic" src="' + img + '" />';
			var item            = item + '</a>';
			var item            = item + '</div>';
			
			$(this).remove();
			$('.masonry__container').append(item);
			$('.modal-container[data-modal-index="buy-card__image"]').remove();

		});

		// REDIRECIONAR PARA A PÁGINA CORRESPONDENTE (SE SERVIÇOS, ESTABELECIMENTO OU DELIVERY)
		if ($('[data-form*="servicos"]').length) {
			//redirecionamento
		}
		else if ($('[data-form*="delivery"]').length) {
			// redirecionamento
		} 
		else if ($('[data-form*="estabelecimento"]').length) {
			// redirecionamento
		}

	}

	$('.modal-trigger[data-modal-index="buy-card__image"]').on('click', function(e) {
		e.preventDefault();
		// CONFIRM + SUBMIT -- HIDEEN // 
		$('.form-group.confirm, .form-group.submit').hide();
		var cover__titleDefault;

		if ($('[data-form*="servicos"]').length) {
			cover__titleDefault = 'Nome e Sobrenome ou Título';
		}
		else if ($('[data-form*="delivery"]').length) {
			cover__titleDefault = 'Nome do Delivery';
		} 
		else if ($('[data-form*="estabelecimento"]').length) {
			cover__titleDefault = 'Nome Empresa/Estabelecimento';
		} 
		else {
			cover__titleDefault = 'Titulo';
		}
		
		//  RESTANTE DO COVER
		var elem                  =   $(this);
		var image                 =   elem.find('img').attr('src');
		var coverHtmlinput        =   '<input type="text" id="ContactForm1_contact-form-name" class="cover__title validate-required" maxlength="30" placeholder="' + cover__titleDefault + '"/>';
		coverHtmlinput            +=  '<input type="text" class="cover__subtitle" maxlength="33" placeholder="Slogan promocional" />';
		coverHtmlinput            +=  '<img id="image" src="' + image + '" style="opacity: 0.5" />';
		coverHtmlinput						+=	'<span class="cover__disclaimer">Clique no texto para editar</span>';

		// APLICAR IMAGEM ESCOLHIDA NA SECTION DE CONFIRMACAO
		$('div#successMsg').find('.background-image-holder').css('background', 'url(' + image + ')');

		$('.modal-container').map(function() {
			$(this).find('.card__image').html(coverHtmlinput);

			// verificar se no form inteiro existe a classe field-error
			// se não existe { adicionar o id "ContactForm1_contact-form-submit" ao botão }

			function confirmacao() {
				$('.form-group.submit').hide();
				// validar preenchimento
				validate();
				if(validateState) {
					$('.form-group.confirm').fadeIn();
				}
				else {
					$('.form-group.confirm, .form-group.submit').hide();
				}
			}

			// Função que abre o submit
			function gravacao() {
				if(validateState) {
					$('.form-group.submit').fadeIn();
					$('.form-group.confirm').hide();
					preencheForm();
				}
			}

			$('form').on('change', function() {
				confirmacao();
				$('textarea').val('');
			});

			$('.confirmar').on('click', function() {
				// validar preenchimento
				gravacao();
			});

			var myEmail = 'email' + Math.floor((Math.random() * 10000) + 1) + '@email.com';
			$('#ContactForm1_contact-form-email').val(myEmail);

			// ICON CHECK
			$('input').on('blur', function() {
			  validate();
			  
			  if ( $(this).hasClass('invalid') == false ) {
			    $(this).siblings('.icon').addClass('active');
			  }
			  else {
			    $(this).siblings('.icon').removeClass('active');
			  }
			});

			$("#ContactForm1_contact-form-submit").on("click", function() {
				var successMsg = $('#successMsg').html();
				setTimeout( function() {
					$('body').html(successMsg).fadeIn('slow');
				},2000);      
			});

		}).show();
	});


	// JQUERY MASKED INPUT
	$('#ContactForm1_contact-form-tel').mask("(32) 99999-9999");
}