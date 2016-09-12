// ***********Modal Directive*********************

myApp
		.directive(
				'Modal',
				function() {
					return {
						template : '<div class="modal fade" data-backdrop=\x22static\x22 data-keyboard=false >'
								+ '<div class="modal-dialog">'
								+ '<div class="modal-content">'
								+ '<div class="modal-header navbar navbar-inverse">'
								+ '<button type="button" class="close" data-dismiss="modal" aria-hidden="true" style=" color:white;">&times;</button>'
								+ '<h4 class="modal-title" style="margin-left:40%; color:white;"> {{ buttonClicked }}</h4>'
								+ '</div>' + '<div class="modal-body" ng-transclude></div>' + '</div>' + '</div>'
								+ '</div>',
						restrict : 'E',
						transclude : true,
						replace : true,
						scope : true,
						link : function postLink(scope, element, attrs) {
							scope.$watch(attrs.visible, function(value) {
								if (value == true)
									$(element).modal('show');
							});

							$(element).on('shown.bs.modal', function() {
								scope.$apply(function() {
									scope.$parent[attrs.visible] = true;
								});
							});

							$(element).on('hidden.bs.modal', function() {
								scope.$apply(function() {
									scope.$parent[attrs.visible] = false;
								});
							});
						}
					};
				});
