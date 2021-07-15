var card = document.getElementById('chava')
card.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
card.translate(105, 0);