( function() {
	var iframe = document.createElement( 'iframe' );

	iframe.src = 'http://comandeer.github.io/tracker.html#' + encodeURIComponent( location.href );
	iframe.style.display = 'none';

	iframe.addEventListener( 'load', function() {
		window.addEventListener( 'message', function( evt ) {
			if ( evt.origin !== 'http://comandeer.github.io' ) {
				return;
			}

			console.log( '%c Tracked tabs', 'font-weight: bold;', evt.data );
		}, false );
	}, false );

	document.body.appendChild( iframe );

	window.addEventListener( 'beforeunload', function( evt ) {
		iframe.contentWindow.postMessage( 'remove', 'http://comandeer.github.io' );
	} );
} () );
