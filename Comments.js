/*
#progressbar {
    background: #f5fffa;
  }
  .progress-label {
    position: absolute;
    text-align: center;
    width: 100%;
    color: #cccccc;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 20px;
  }
  .ui-progressbar {
    position: relative;
  }
  
  .ui-progressbar .ui-progressbar-value {
    margin: 0;
  }
  
  .ui-widget-header {
    background: #ec2528;
  }
  p {
    text-align: center;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 26px;
  }
  .well {
    margin-top: 20px;
  }
  



  <link href="https://fonts.googleapis.com/css?family=Oswald|Roboto" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
<div class="container">
      <div class="well">
        
        <div id="progressbar">
          <div class="progress-label">Your Progress</div>
        </div>
      </div>
    </div>




     $(document).ready(function() {
    $( function() {
      var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
   
      progressbar.progressbar({
        value: tru,
        change: function() {
          progressLabel.text( progressbar.progressbar( "value" ) + "%" );
        },
        complete: function() {
          progressLabel.text( "Complete!" );
        }
      });
   
      function progress() {
        var val = progressbar.progressbar( "value" ) || 0;
   
        progressbar.progressbar( "value", val + 2 );
   
        if ( val < 99 ) {
          setTimeout( progress, 80 );
        }
      }
   
      setTimeout( progress, 2000 );
    } );
  });
  }
 */ 
  
  