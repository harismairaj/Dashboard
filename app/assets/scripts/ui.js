var ui = function () {

    return {
		
		init:function()
		{
			
		},
		
		isoTope:
		{
			container:'',
			lastFilter:'*',
			init:function()
			{
				$("#iso-filter-btns").children().each(function(i){
					
					$(this).click(function(e){
						e.preventDefault();
						var filter = $(this).attr('data-filter');
						$(this).addClass("active");
						$("button[data-filter='"+ui.isoTope.lastFilter+"']").removeClass("active");
						ui.isoTope.lastFilter = filter;
						ui.isoTope.container.isotope({ filter: filter });
					});
				});
				
				ui.isoTope.container = $('#isotope').isotope({
					layoutMode: 'fitRows',
					getSortData:{
						category: '[data-category]'
					}
				});
			},
			item:
			{
				add:function(elm){
					ui.isoTope.container.isotope('insert', elm);
				},
				close:function(elm){
					ui.isoTope.container.isotope( 'remove', $(elm).parent() ).isotope('layout');
				}
			}
			
		}
		
	}
}();