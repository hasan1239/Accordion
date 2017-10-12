var acc = document.getElementsByClassName("section");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

var div = document.getElementsByClassName('body')[0],
	button = div.getElementsByTagName('button'),
	p = div.getElementsByTagName('p'),
	data = {
		"blocks": [
			{
				"heading": "Section 1",
				"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis!"
			},
			{
				"heading": "Section 2",
				"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque!"
			},
			{
				"heading": "Section 3",
				"content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			}
		]
	};

data.blocks.forEach(function(v, i) {
	button[i].innerHTML = v.heading;
	p[i].innerHTML = v.content;
});