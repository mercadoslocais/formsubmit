//1 - verificar se o form é Delivery, Estabelecimento ou Serviços
//2 - preencher os dados no card conforme respectivo
//3 - inserir os horarios html na div do card
// ** Delivery           // ** Estabelcim      // ** Servicos
// 'c__name_i'           // 'c__name_i'        // ''
// 'c__name'             // ''                 // 'c__name'
// 'c__address'          // 'c__address'       // 'c__address'
// 'c__phone-whats'      // 'c__phone-whats'   // 'c__phone-whats'
// 'c__phone-tel'        // 'c__phone-tel'     // 'c__phone-tel'
// 'c__categoria'        // 'c__categoria'     // 'c__categoria'
// 'c__categoria-tipo'   // ''                 // 'c__categoria-tipo' (funcao)
// pagtos                // pagtos             // pagtos
// sociais               // sociais            // sociais 
// horarios              // horarios           / horarios

// ! VALIDATE
// ! NAVIGATION
// ! FUNCTIONS
// ! ACTIONS

$(document).ready(function(){
	if ($('form[data-style="typeform"]').length) {

		// ! VALIDATE
		/* Config Vars */
		validateState = false;
		/* Required message */
		validateRequiredMsg = "Campo de preenchimento obrigatório";
		function validate() {
			$('input[type="text"], input[type="tel"], input[type="email"], select').each(function(){
				if ($(this).prop('required') && $.trim($(this).val()) == '') {
					$(this).addClass('invalid');
					$(this).focus() && $(this).closest('section').css('opacity', '1');
					/*Mostrar Mensagem de validação*/
					// $('.validate_message').html(validateRequiredMsg);
					/*Estado da validação*/
					validateState = false; 
					return false;
				}
				else {
					$(this).removeClass('invalid');
					/*Apagar Mensagem de validação*/
					// $('.validate_message').empty();
					/*Estado da validação*/
					validateState = true;
				}
			});
		}

		// ! NAVIGATION
		var innerPageLink = $("a.inner-link");
    $('section:nth-of-type(1)').find('.validate-required').attr('required', 'required');
    
    innerPageLink.each(function() {
      // $(this).css('color', 'red');
      var link            = $(this);
      var href            = $(this).attr('href');
      var section         = link.closest("section");
      var next_section    = section.next();
      var prev_section    = section.prev();
      var hrefNext        = next_section.attr('id');
      var hrefPrev        = prev_section.attr('id');

      if($(this).hasClass('prev')) {
        // ocultar todas as sections com elementos prev
        $(this).closest('section').css('opacity', '0');
        
        var hash = '#' + hrefPrev;    
        $(this).attr('href', hash);

        $(this).on('click', function() {
          section.css('opacity', '0');
          prev_section.css('opacity', '1');
        });
      }
      else if($(this).hasClass('next')) {
        $(this).on('click', function(e) {        	
          validate();
          if(validateState == true) {
            var hash = '#' + hrefNext;
            $(this).attr('href', hash);
            section.css('opacity', '0') && section.find('.validate-required').removeAttr('required');
            next_section.css('opacity', '1');
            next_section.find('.validate-required').attr('required','required');                
          }
          else {
            e.preventDefault()
            section.css('opacity', '1');
          }
        });  
      }
    });
    $('#aceitar').parent('.input-checkbox').on('click', function() {
      $(this).closest('section').find('.pagination-container').toggleClass('hidden');
    });

    // ! FUNCTIONS
		function preencheCard() {
			$("input[type='text'], select").each(function(){

				var fNome       = $('#i_Nome').val();
				var fEmail 			= $('#i_Email').val();
				var fAddress    = $('#i_Endereco').val();
				var fTelFixo    = $('#i_TelFixo').val();       
				var fTelWhats   = $('#i_TelCelular').val();    
				var fNome_i     = $('#i_Nome_i').val();
				var fCateg      = $(this).parents('form').attr('data-form'); 
				var fCateg_i    = $('#i_Categoria-Tipo').val();
				var fCateg_i2   = $('#i_Categoria-Tipo2').val();

				var fTitle			= $("input[type='text'].cover__title").val();
				var fSubTitle		= $("input[type='text'].cover__subtitle").val();

				function xp(x,y) {
					if (x != '') {
						$('.hidden_card').find(y).text(x);
					}
					else {
						$('.hidden_card').find(y).text('Inf. indisponível');
					}
					return true;
				}
				xp(fTitle, '.cover__title');
				xp(fSubTitle, '.cover__subtitle');
				xp(fNome, '.c__name');
				xp(fNome_i, '.c__name_i');
				xp(fAddress, '.c__address');
				xp(fCateg, '.c__categoria');
				xp(fCateg_i, '.c__categoria_i');
				xp(fCateg_i2, '.c__categoria_i2');
				xp(fTelFixo, '.c__phone-tel span');
				xp(fTelWhats, '.c__phone-whats span');

				var ci2 = $('.hidden_card').find('.c__categoria_i2');
				if($('#i_Categoria-Tipo2').length) {
					ci2.css('display','block');
				} else {
					ci2.css('display','none');
					xp('', '.c__categoria_i2');
				}
				// FORMAT TEL FIXO
				if(fTelFixo == '') {
					$('.hidden_card').find('.c__phone-tel').addClass('hidden');
				} else {
					$('.hidden_card').find('.c__phone-tel').removeClass('hidden');
				}
				// FORMAT TEL WHATSAPP LINK 
				var fTelWhats = fTelWhats.replace(/\D/g, '');
				var walink 		= 'https://wa.me/send/?phone=' + fTelWhats + '&text=:%20Ol%C3%A1,%20tudo%20bem?';

				$('.c__phone-whats a').attr({'href': walink, 'rel': 'nofollow', 'target': '_blank'});

				// EMAIL 
				$('')
			});
			// return this;
		}

		function desmarcar() {
			$('.input-checkbox.aceitar').each(function () {
				if (this.hasClass('checked')) {
					$(this).children('input').attr("checked", false);
					$(this).removeClass('checked');
				}
			});
		}

		function aceitar() {
			$('.form-group.submit').hide();

			if($('.input-checkbox.aceitar').hasClass('checked')) {
				$('.form-group.confirm').fadeIn();
			}
			else {
				$('.form-group.confirm, .form-group.submit').hide();
			}
		}

		function confirmar() {
			if(validateState) {
				$('.form-group.submit').fadeIn();
				$('.form-group.confirm').fadeOut();
				preencheCard(); 
			};
		}

		function letters() {
			const characters ='abcdefghijklmnopqrstuvwxyz';
		  var result = '';
		  const charactersLength = characters.length;
		  for ( var i = 0; i < 12; i++ ) {
		  	result += characters.charAt(Math.floor(Math.random() * charactersLength));
		  }
		  return result;
		}
		// console.log(letters());

		// ! ACTIONS
		$('.form-group.confirm, .form-group.submit').hide();

		var Xhoras;
		var checkbox        = $("input[type='checkbox']");
		var checkBoxdia     = $(".input-checkbox.dia");
		var checkBoxPagto   = $(".input-checkbox.pagto");
		var checkBoxSocial  = $(".input-checkbox.social");
		
		//NOVO: todos os checkbox
		checkbox.each(function() {

			var x = $(this).attr('name');
			var y = $('.hidden_card').find('[name="' + x + '"]');       // y.parent not .c__horarios 
			// var z = $('.hidden_card').find('[data-dia="' + x + '"]');
			var zS = $('.hidden_card.servicos').find('[data-dia="' + x + '"]');
			var zD = $('.hidden_card.delivery').find('[data-dia="' + x + '"]');
			var zE = $('.hidden_card.estabelecimento').find('[data-dia="' + x + '"]');
			
			zS.text('Indisponível');
			zD.text('Fechado');
			zE.text('Fechado');

			if ($(this).parent('.input-checkbox').hasClass('checked')) {
				y.addClass('eneabled');
			}
			else {
				y.addClass('disabled');
			};

			$(this).parent('.input-checkbox').on('click', function(){
				y.toggleClass('eneabled disabled');
			});
			
		});

		// Montar endereço
		$(".form-group.endereco input").on('keyup', function() {
			var rua 	= $("input.rua").val();
			var num 	= $("input.numero").val();
			var comp 	= $("input.complemento").val();

			 if ( comp != '') {
			 	var result = rua + ", Nº " + num + ", " + comp;
			 } else {
			 	var result = rua + ", Nº " + num;
			 }

			$('#i_Endereco').val(result);
		})

		// se o tNao for selecionado: 
		/* tInput limpa validacao + wInput fica validate-required + wSim .checked + wNao .unchecked
				ou #w_options hide() + #w_alert show() + wInput validate-required + tInput limpa validate
		*/
		// se o tSim for clicado tInput fica validate-required e required
		// se o wNao for clicado wInput limpa validacao + tInput fica validate-required
		// se o wSim for clicado wInput fica validate-required e required


		// [i_TelFIxo + i_TelCelular] PILLAR INPUT RADIO 

		$('.input-radio.CheckTel').on('click', function() {
			var tNao 		= $('.input-radio[data-name="tNao"]');
			var tSim		= $('.input-radio[data-name="tSim"]');
			var wNao		= $('.input-radio[data-name="wNao"]');
			var wSim		= $('.input-radio[data-name="wSim"]');			

			var thisInput	= $(this).closest('.row').find('input[type="tel"]');
			var t_input 	= $('#i_TelFixo');
			var w_input 	= $('#i_TelCelular');

			if(tNao.hasClass('checked')) {
				// input telefone limpa validacao
				thisInput.removeClass('validate-required').removeAttr('required');
				// input whatsapp required
				// w_input.addClass('validate-required').attr('required', 'required'); // :: redundante
				// fecha opcoes whatsapp e abre alerta whatsapp
				$('#w_options').hide() && $('#w_alert').show();
			} else if (wNao.hasClass('checked')) {
				// input whatsapp limpa validacao
				thisInput.removeClass('validate-required').removeAttr('required');
				// input telefone required
				// t_input.addClass('validate-required').attr('required', 'required'); // :: redundante
				// fecha opcoes telefone e abre alerta telefone
				$('#t_options').hide() && $('#t_alert').show();
			} else {
				// input proprio faz validacao
				thisInput.addClass('validate-required').attr('required', 'required');
				// ambos os alertas podem fechar, ambos options podem abrir
				$('#t_options, #w_options').show() && $('#t_alert, #w_alert').hide();
				// input whatsapp required e input telefone required (ambos required)
			}
		});


		// Abrir e Fechar CheckEmail (Controle)
		$(".input").on('click', function() {

			var mail = $(this).parent().find("input[type='email']");
			var maildefault = letters() + Math.floor((Math.random() * 10000)) + '@blogger.com';

			if($(this).is(':checked')) {
				$(this).parent().removeClass('inCheck');
				mail.removeAttr('required').hide().val(maildefault);
			}
			else {
				$(this).parent().addClass('inCheck');
				mail.attr('required', 'required').val('').fadeIn();
			}

		});

		// PILLAR INPUT CHECKBOX:
		// Lista de Dias e Horários da Semana
		// var checkBoxdia = $('.input-checkbox.dia');
		checkBoxdia.each(function() {
			var div_horarios 	= $('.hidden_select_horarios').html();
			var dia = $(this).find('input[type="checkbox"]').attr('data-dia');
			
			// definir id;
			$(this).attr({id: 'h_' + dia}); // => <div class="input-checkbox" id="h_Segunda-feira

			$(this).on('click', function(){
				// se receber a classe "checked":
				if ($(this).hasClass('checked')) {
					// inserir o html com os selects de horarios:
					$(this).closest('.row').find('[data-horarios]').append(div_horarios);
					
					// definir selects para 'required':
					$('[data-horarios] div.horarios > select').attr({
						'class': 'validate-required',
						required: 'required'
					});

					// mudanças carregam dia & Xhoras
					$(this).parents('.row').find('.horarios').on('change', function(){
						var h = $(this).find('select').map(function(){
							return $(this).val();
						}).get().join(' às ');
						Xhoras = h;

						// dia correspondente no hidden_card recebe valores em texto
						$('.hidden_card').find('[data-dia="' + dia + '"]').text(Xhoras);

						// definir id e valores selecionados ao input checkbox com html:
						$(this).parent().find("input[type='checkbox']").attr({
							id: 'h_' + dia
						});        

					});

					// set dia:
					// $(this).val(c);

				}
				else {
					Xhoras = 'Fechado';
					// dia correspondente no hidden_card recebe valores em texto
					$('.hidden_card').find('[data-dia="' + dia + '"]').text(Xhoras);

					$(this).removeAttr('id');
					// remover o html com os selects horarios
					$(this).closest('.row').find('[data-horarios] > div').remove();

				};
			});				
		});

		// Sempre que o formulário for modificado
		$('form').on('change', function() {

			aceitar();
			$('textarea').val('');

		});

		$('#i_Categoria-Tipo').on('change', function() {

			desmarcar();
						
			var ct2_div 		= $('.Categoria-Tipo2');
			
			var ytxt 				= $('.hidden_select_txt').html();
			var ytx1				= $('.hidden_select_tx1').html();
			var yfem 				= $('.hidden_select_fem').html();
			var ymsc				= $('.hidden_select_msc').html();
			
			ct2_div.empty().hide();


			if ($(this).val() == 'Outros serviços' || $(this).val() == 'Comércio, Outros') {
				ct2_div.fadeIn().append(ytxt);
			}
			else if ($(this).val() == 'Aulas particulares') {
				ct2_div.fadeIn().append(ytx1);
			}
			else if ($(this).val() == 'Beleza Feminina') {
				ct2_div.fadeIn().append(yfem);
			}
			else if ($(this).val() == 'Beleza Masculina') {
				ct2_div.fadeIn().append(ymsc);
			}
			else {
				ct2_div.empty().hide();
			}
			
			var ct2_input 	= $('.Categoria-Tipo2').find('input[name="Categoria-Tipo2"]');

			ct2_input.addClass('validate-required').attr({
				'required':'required',
				'id': 'i_Categoria-Tipo2'
			});
      			
		});

		$('.confirmar').on('click', function() {

			// validar preenchimento
			validate();

			// se retornar preenchido corretamente:
			if(validateState) {
				// então preencher o textarea
				confirmar();
			}
			// se retornar preenchido errado
			else {
				desmarcar();
				aceitar();
			}
			// preencher nome
			$('#nomeform').val($('#i_Nome').val());
			// preencher email 
			if($.trim($('#i_Email').val()) == '') {
				var randomEmail = letters() + Math.floor((Math.random() * 1000)) + '@blogger.com';
				$('#emailform').val(randomEmail);
			}

			var resultCard = $(".hidden_card").html();
			// preencher o campo mensagem:
			$('#messageform').val($(".hidden_card").html());
			// apresentar resultado visual:
			$('#card__demo').html(resultCard);

		});

		$('#header-wrapper, #navbar-wrapper, #title-wrapper, #footer-wrapper').remove();

	}

	// jQuery Masked Input
	$("#i_TelFixo").mask("(32) 9999-9999");
	$("#i_TelCelular").mask("(32) 99999-9999");

});

