// form keywords
$(document).ready(function(){
  /*----------
    CADASTRO-SERVIÇOS
  ----------*/
  if($('form#cadastro-servicos').length) {
    function categoria1() {
      var cat1  = $('#i_Categoria-Tipo').val();

			if(cat1 == 'Pedreiro') {
				$('.c__keywords').text(
          '[pedreiro], casa, banheiro, tijolo, construção, construir, obra, obras, laje, reforma, reformar, reformas, concretar, janela, porta, balcão, instalar, pia, portão, portao, parede, piso, escada, escadaria, acabamento, acabamentos, fundação, grade'
          );
			} else if (cat1 == 'Marceneiro') {
				$('.c__keywords').text(
          '[marceneiro], marcenaria, casa, conserto, arruma, arrumar, consertar, mesa, cadeira, madeira, montar, montador, telhado, balcão, cama, armario, armário, guarda-roupa, guarda roupa, piso de madeira, tabua, tábua, ripa, ripas, projeto, lixar, reforma, reformar, rodapé'
        );
			} else if (cat1 == 'Técnico Encanador') {
				$('.c__keywords').text(
          '[encanador], cano, encanamento, obra, consertar, conserto, vazamento, entupido, torneira, chuveiro, caixa dagua, caixa dágua, agua, água, piscina, esgoto, ralo, ralinho, banheiro, lavanderia, lavatório, lavatorio, vaso, vazar, borracha, registro, mangueira'
        );
			} else if (cat1 == 'Técnico Eletricista') {
				$('.c__keywords').text(
          '[eletricista], apagador, eletrica, elétrica, fio, chuveiro, energia, cabo, cabos, cabeamento, instalar, padrão de energia, padrao, interruptor, ventilador de teto, consertar, portão eletrônico, eletronico, porteiro'
        );
			} else if (cat1 == 'Pintor' || cat1 == 'Pintor Residencial') {
				$('.c__keywords').text(
          '[pintor], pintar, pintura, tinta, lixar, parede, reforma, reformar'
        );
			} else if (cat1 == 'Gesseiro') {
				$('.c__keywords').text(
          '[gesseiro], gesso, sanca, teto, parede, externa, externo, lixar, reforma, reformar, interior, decorativo, decoração, decorar, rodateto, placas'
        );
			} else if (cat1 == 'Vidraceiro') {
				$('.c__keywords').text(
          '[vidraceiro], vidro, janela, porta, sacada, parapeito, varanda, portão, portao, quebrado, corte, temperado, espelho, refletivo, jateado, alumínio, aluminio, box, banheiro, decorativo, projeto, obra, reforma, reformar, mesa, tampo'
        );
			} else if (cat1 == 'Jardineiro') {
				$('.c__keywords').text(
          '[jardineiro], jardim, jardinagem, cuidar, plantas, plantar, grama, gramado, cortar, aparar, terreno, limpeza, limpar, corte, casa, doméstico, domestico, granja, sitio, sítio'
        );
			} else if (cat1 == 'Ajudante Diarista') {
				$('.c__keywords').text(
          '[ajudante], obra, casa, ajudar, limpar, ajudante geral, terreno, capina, capinar, limpeza, jardim, enxada, descarregar, carga, carregador'
        );
      } else if (cat1 == 'Faxineiro(a) Diarista') {
				$('.c__keywords').text(
          '[faxineiro], faxina, fachina, faxineira, limpar, limpeza, arrumadeira, arrumar, arruma, encerar, cozinha, casa, cuidar, lavadeira, lavar, lar'
        );
      } else if (cat1 == 'Cozinheiro(a)') {
				$('.c__keywords').text(
          '[cozinheiro], fazer comida, fogão, cozinhar, cozinha, cozinheira'
        );
      } else if (cat1 == 'Artesã(o)') {
				$('.c__keywords').text(
          '[artesao], artesão, artesao, artesa, artesanato'
        );
      } else if (cat1 == 'Corte e Costura') {
				$('.c__keywords').text(
          '[costureira], costura, costurar, costureira, costureiro, roupa, roupas, calça, remendo, emenda, bainha, botão, pregar botão, ziper, consertar, rasgado, calça, camisa, saia, paletó, terno, vestido, blusa, blusinha, camiseta, bermuda, short, shorts, top, tecido'
        );
      } else if (cat1 == 'Reparo de calçados') {
				$('.c__keywords').text(
          '[calcadista], colar, tenis, tênis, sapateiro, sapato, sapataria, sandália, chinelo, couro, salto, fivela, consertar, conserto, arrumar, engraxar, tintura, graxa, sola, solado, reformar, calcados, calcado, calçado, sapatenis, sapatênis, costura, costurar'
        );
      } else if (cat1 == 'Reparo de móveis' || cat1 == 'Reparo de móveis e estofados') {
				$('.c__keywords').text(
          '[estofador], cadeira, mesa, armário, consertar, conserto, marcenaria, reformar, reforma, manutenção, manutencao, montar, montador, sofá, estofados, estofador, estofado, trocar, assento, poltrona, espuma, espumas, escritório, gamer'
        );
      } else if (cat1 == 'Reparo de eletrônicos') {
				$('.c__keywords').text(
          '[eletronicos], consertar, computador, celular, conserto, soldar, tela, televisor, tv, placa, fonte, rádio, internet, roteador'
        );
      } else if (cat1 == 'Reparo de eletrodomésticos') {
				$('.c__keywords').text(
          '[eletrodomesticos], consertar, reparar, conserto, geladeira, microondas, freezer, maquina, máquina, lavar, lavadora, aspirador, eletrico, elétrico, queimado, batedeira, liquidificador, ventilador, aquecedor, ar, condicionado, louças, coifa, frigobar, adega, centrífoga, consul, branstemp, eletrolux'
        );
      } else if (cat1 == 'Técnico de Informática') {
				$('.c__keywords').text(
          '[informatica], computador, formatar, memória, memoria, hd, fonte, pendrive, pen, drive, cooler, roteador, internet, ram, ssd, geforce, amd, consertar, pc, cpu, gabinete, impressora, imprimir, cartucho, recarga, recarregar'
        );
      } else if (cat1 == 'Fotógrafo(a)') {
				$('.c__keywords').text(
          '[fotógrafo], foto, fotografia, fotografo, montagem, estúdio, festa, casamento, casamentos, formatura, formaturas, imagem, retrato'
        );
      } else if (cat1 == 'Aulas particulares') {
				$('.c__keywords').text(
          '[aulas], aula, ensinar, ensino, aprender, reforço, professor, professora, instrutor, instrutora, escola, escolar, treinar, treinamento'
        );
      } else if (cat1 == 'Fretes e Carretos') {
				$('.c__keywords').text(
          '[frete], carreto, transporte, mudança, mudanca, transportar, mudar, encomenda, móveis, moveis, movel, guarda, roupa, guarda-roupa, guarda-roupas, mesa, mesas, escrivaninha, geladeira, levar, trazer, leva, buscar, carregar, carrega, carga, van'
        );
      } else {
				$('.c__keywords').empty();
			}

    }
    function categoria2() {
      var cat2  = $('#i_Categoria-Tipo2').val();
      
      if (cat2 == 'Cabelos: Cortes e Penteados') {
        $('.c__keywords').text(
          '[feminino cabelo corte], corte, cortar, cabelo, cabelos, mulher, feminino, feminina, cabeleireira, cabelereira, chapinha, escova, cachos, trança, tranças'
        );
      } else if (cat2 == 'Cabelos: Coloração e Hidratação') {
        $('.c__keywords').text(
          '[feminino cabelo pintura], cabeleireira, cabelereira, cabelo, cabelos, mulher, feminino, feminina, pintar, pintura, tintura, luzes, hair, hidratar, hidratacao, clareamento, clarear, alisamento, alisar, progressiva, selar, selagem'
        );
      } else if (cat2 == 'Cabelos: Manicure e Pedicure') {
        $('.c__keywords').text(
          '[feminino manicure], unha, unhas, pe, pé, mao, mão, decoradas, decorar, decorativa, decorativas, porcelana, fibra, silicone, esmalte'
        );
      } else if (cat2 == 'Modelagem de Sobrancelhas') {
        $('.c__keywords').text(
          '[feminino sobrancelhas], sobrancelha, sombrancelha, sombrancelhas, cílio, cilio, cilios, cílios, alongamento'
        );
      } else if (cat2 == 'Tratamentos Estéticos Faciais') {
        $('.c__keywords').text(
          '[feminino faciais], estetico, estético, estetica, estética, esteticas, estéticas, rosto, pele, feminino, femininos, mulher, mulheres, facial, limpeza'
        );
      } else if (cat2 == 'Massoterapia') {
        $('.c__keywords').text(
          '[feminino massagens], massagear, massageadora, linfatica, linfática, massoterapeuta, modeladora, corporal, corpo, feminino, femininos, mulher, mulheres'
        );
      } else if (cat2 == 'Depilação') {
        $('.c__keywords').text(
          '[feminino depilacao], depilar, depiladora, feminino, femininos, mulher, mulheres, pelo, pelinhos, cera'
        );
      } else if (cat2 == 'Maquiagem') {
        $('.c__keywords').text(
          '[feminino maquiagem], feminino, femininos, mulher, mulheres, maquiar, rosto, pele'
        );
      } else if (cat2 == 'Barbeiro: Cortes e Penteados') {
        $('.c__keywords').text(
          '[barbairo], corte, cortar, cabelo, barba, barbearia, homem, masculino, cabeleireiro, cabelereiro'
        );
      } else if (cat2 == 'Cuidados Faciais Masculinos') {
        $('.c__keywords').text(
          '[masculino faciais], masculino, facial, rosto, pele, tratamento, esteticista, estetica, estética, estéticas, homem, homens'
        );
      } else if (cat2 == 'Manicuro Masculino') {
        $('.c__keywords').text(
          '[masculino manicuro], masculino, manicure, unha, unhas, pé, mão'
        );
      } else if (cat2 == 'Massagens Estéticas') {
        $('.c__keywords').text(
          '[masculino massagem estetica], masculino, masculinos, massagem, estética, estetica, esteticas, esteticista, massagem, drenagem, linfática, linfatica, corporal, massagear'
        );
      } else if (cat2 == 'Massagens Relaxantes') {
        $('.c__keywords').text(
          '[masculino massagem relaxante], masculino, masculinos, massagem, corporal, modelador'
        );
      } else if (cat2 == 'Depilação Masculina') {
        $('.c__keywords').text(
          '[masculino depilacao], masculino, depilacao, depilar, homem'
        );
      } else if (cat2 == 'Serviços de Estética Masculina') {
        $('.c__keywords').text(
          '[masculino depilacao], masculino, depilacao, depilação, estética, estetica, esteticista, barbeiro, barbearia, massagem, homem'
        );  
      } else if (cat2 == 'Podologia') {
        $('.c__keywords').text(
          '[podologia], masculino, homem, mulher, mulheres, feminino, podólogo, podologo, podóloga, podologa, pé, pe, encravado, encravada, unha, unhas, machucado, machucada, tratar, tratamento'
        );
      }
    }

    $('form').on('change', function() {
      if($('#i_Categoria-Tipo').val() != '') {
        categoria1();
      }
      if ($('#i_Categoria-Tipo2').val() != '') {
				categoria2();
			}
    });

  }

  /*----------
    CADASTRO-DELIVERY
  ----------*/
  if($('form#cadastro-delivery').length) {
    function categoria() {
      var cat = $('#i_Categoria-Tipo').val();

      if (cat == 'Hamburgueres e Lanches' || cat == 'Hamburguers e Lanches') {
        $('.c__keywords').text(
          'Hamburguer, hamburger, gourmet, x-burguer, x-bacon, x-salada, x-tudo, burguer, bacon, salada, tudo, refrigerante, refri, delivery, entrega'
        )
      } else if (cat == 'Pães Bolos e Doces') {
        $('.c__keywords').text(
          'entrega, delivery, entregar, pão, pães, bolo, bolos, bolinho'
        )
      } else if (cat == 'Pizzas e Massas') {
        $('.c__keywords').text(
          'delivery, entrega, entregas, pizza, pizzas, massa, macarrão, macarronada, marmita, quentinha'
        )
      } else if (cat == 'Marmitas e Porções') {
        $('.c__keywords').text(
          'delivery, entrega, entregas, marmita, porção, batata, comida, marmitex'
        )
      } else if (cat == 'Comida Típica') {
        $('.c__keywords').text(
          'entrega, delivery, entregas, comida, marmita, marmitex, tipica, mmarmitas, forno, lenha'
        )
      } else if (cat == 'Doces e Sobremesas') {
        $('.c__keywords').text(
          'entrega, delivery, entregas, sobremesa, doce, brownie, bolinho'
        )
      } else if (cat == 'Delivery de Petiscos') {
        $('.c__keywords').text(
          'entrega, delivery, entregas, petisco, marmita, frito, frita, batata, linguiça, bacon, marmitex'
        )
      } else if (cat == 'Delivery de Bebidas') {
        $('.c__keywords').text(
          'entrega, delivery, entregas, cerveja, bebida, refrigerante, agua, água, coca-cola, alcoólica, alcoólico, alcolico, alcolica, acoolico, alcoolica'
        )
      } else if (cat == 'Outros Deliveries de Comida' || cat == 'Outros Deliverys de Comida') {
        $('.c__keywords').text(
          'entrega, delivery, entregas, marmita, marmitex, marmitas'
        )
      } else {
         $('.c__keywords').empty();
      }
    }

    $('form').on('change', function() {
      if($('#i_Categoria-Tipo').val() != '') {
        categoria();
      }
    });
  }

  /*----------
    CADASTRO-ESTABELECIMENTO
  ----------*/
  if($('form#cadastro-delivery').length) {
    function categoria() {
      var cat = $('#i_Categoria-Tipo').val();

      if (cat == 'Padaria, Confeitaria') {
        $('.c__keywords').text(
          '[padaria], pão, pães, leite, café, tomar'
        )
      } else if (cat == 'Mercado, Mercearia') {
        $('.c__keywords').text(
          '[mercado], leite, arroz, açúcar, acucar, açucar, óleo, carne, ovo, ovos'
        )
      } else if (cat == 'Bar, Restaurante') {
        $('.c__keywords').text(
          '[restaurante], comida, comer, almoço, lanchar, almoçar'
        )  
      } else if (cat == 'Farmácia, Laboratório') {
        $('.c__keywords').text(
          '[farmacia], remédios, remedios, remédio, remedio, laboratorio, dor, '
        )
      } else if (cat == 'Papelaria, Diversos') {
        $('.c__keywords').text(
          '[papelaria], papel, caneta, escola, escolar, caderno'
        )
      } else if (cat == 'Comércio de Presentes') {
        $('.c__keywords').text(
          '[presente], presentear, retrato, aniversário, mães, pais, mae, mamãe, natal, namorados'
        )
      } else if (cat == 'Comércio de Beleza e Estética') {
        $('.c__keywords').text(
          '[estetica], shampoo, creme, cremes, esmalte, tintura, '
        )
      } else if (cat == 'Comércio de Saúde e Bem-Estar' || cat == 'Comércio de Saúde e Bem Estar' ) {
        $('.c__keywords').text(
          '[bem-estar], aulas, física, tratamento, saude, saudavel, exercício, exercicio, exercitar'
        )
      } else if (cat == 'Comércio de Itens Religiosos') {
        $('.c__keywords').text(
          '[religiosos], religioso'
        )
      } else if (cat == 'Comércio, Distribuidora' || cat == 'Comércio Distribuidora') {
        $('.c__keywords').text(
          '[distribuidora], varejo, atacado, produtos, caixas'
        )
      } else if (cat == 'Comércio de Itens Domésticos') {
        $('.c__keywords').text(
          '[itens domésticos], casa, decoração, decorativos'
        )
      } else if (cat == 'Comércio da Construção') {
        $('.c__keywords').text(
          '[construção], construir, obra, obras, material, materiais'
        )
      } else if (cat == 'Comércio de PetShop') {
        $('.c__keywords').text(
          '[petshop], pet, shop, banho, tosa, tosar, animal, animais, cachorro, cachorros, gato, gatos, ração'
        )
      } else if (cat == 'Comércio de Vestuário') {
        $('.c__keywords').text(
          '[vestuário], camisa, blusa, blusinha, calça, calca, calcinha, roupa, roupas, camiseta, camisetas, sapato, tênis, tenis, sandália, chinelo'
        )
      } else if (cat == 'Comércio Automotivo de Suprimentos') {
        $('.c__keywords').text(
          '[automotivo suprimentos], auto, carro, carros, óleo, moto, filtro'
        )
      } else if (cat == 'Comércio Automotivo de Manutenções') {
        $('.c__keywords').text(
          '[automotivo manutenções], manutenção, manutencao, carro, carros, auto, moto, conserto, '
        )
      } else if (cat == 'Assistência Técnica de Equipamentos') {
        $('.c__keywords').text(
          '[assistência equipamentos], tecnica, equipamento, assistencia'
        )
      } else if (cat == 'Consultório de Especialidades') {
        $('.c__keywords').text(
          '[consultório] consultorio, consultar, consulta, consultas, doutor, doutora'
        )
      } else if (cat == 'Escritório de Especialidades') {
        $('.c__keywords').text(
          '[escritório], escritorio, consultor'
        )
      } else if (cat == 'Instalações e Manutenções Domésticas') {
        $('.c__keywords').text(
          '[instalações domésticas], instalacoes, domesticas, casa, arrumar, conserto, consertar, '
        )
      } else if (cat == 'Hotelaria e Turismo') {
        $('.c__keywords').text(
          '[hotelaria], hotel, movel, pernoite, dormir, descanso, descansar, estadia, estada, quarto, lugar, ficar, passar, noite'
        )
      } else if (cat == 'Transporte e Logística') {
        $('.c__keywords').text(
          '[transporte], transportar, levar, carga, logistica, log, caminhão, estoque'
        )
      } else if (cat == 'Suprimentos Industriais') {
        $('.c__keywords').text(
          '[industriais], maquinário, maquinario, máquinas, maquinas, equipamentos, indústria, industria, industrial, peças, peça'
        )
      } else {
         $('.c__keywords').empty();
      }
    }
  }

});