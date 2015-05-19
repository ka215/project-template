<?php
// Sample Logic

function assets_loader( $load_order=[] ) {
  
  if ( ! file_exists( PROJECT_ROOT . '/assets/assets.json' ) ) {
    if ( 'production' === ENV ) 
      trigger_error( '"assets/assets.json" is not exists.', E_USER_ERROR );
    
    // development env.
    if ( empty($load_order) )
      return;
    
    foreach ( $load_order as $asset_file ) {
      $extention = array_pop(explode('.', $asset_file));
      if ( 'css' === $extention ) 
        printf( '<link href="%sassets/styles/%s" rel="stylesheet">', PROJECT_URL, $asset_file );
      
      if ( 'js' === $extention ) 
        printf( '<script src="%sassets/scripts/%s"></script>', PROJECT_URL, $asset_file );
      
    }
    
  } else {
    if ( 'development' === ENV ) 
      trigger_error( 'Defined environment is invalid.', E_USER_ERROR );
    
    // production env.
    $assets = json_decode( @file_get_contents( PROJECT_ROOT . '/assets/assets.json' ) );
    $load_order = empty($load_order) ? array_keys($assets) : $load_order;
    foreach ( $load_order as $asset_file ) {
      $extention = array_pop(explode('.', $asset_file));
      if ( 'css' === $extention ) 
        printf( '<link href="%sassets/styles/%s" rel="stylesheet">', PROJECT_URL, $assets->$asset_file );
      
      if ( 'js' === $extention ) 
        printf( '<script src="%sassets/scripts/%s"></script>', PROJECT_URL, $assets->$asset_file );
      
    }
    
  }
  
}

function get_head() {
  
  assets_loader( [ 'assets.css', 'fuelux.css', 'main.css' ] );
  
}

function get_content() {
?>
<!-- Wizard Example -->
<div class="wizard" _data-initialize="wizard" id="myWizard">
  <ul class="steps">
    <li data-step="1" data-name="campaign" class="active"><span class="badge">1</span>Campaign<span class="chevron"></span></li>
    <li data-step="2"><span class="badge">2</span>Recipients<span class="chevron"></span></li>
    <li data-step="3" data-name="template"><span class="badge">3</span>Template<span class="chevron"></span></li>
  </ul>
  <div class="actions">
    <button type="button" class="btn btn-default btn-prev"><span class="glyphicon glyphicon-arrow-left"></span>Prev</button>
    <button type="button" class="btn btn-default btn-next" data-last="Complete">Next<span class="glyphicon glyphicon-arrow-right"></span></button>
  </div>
  <div class="step-content">
    <div class="step-pane active sample-pane alert" data-step="1">
      <h4>Setup Campaign</h4>
      <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Beetroot water spinach okra water chestnut ricebean pea catsear courgette.</p>
    </div>
    <div class="step-pane sample-pane bg-info alert" data-step="2">
      <h4>Choose Recipients</h4>
      <p>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard. </p>
    </div>
    <div class="step-pane sample-pane bg-danger alert" data-step="3">
      <h4>Design Template</h4>
      <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify. </p>
    </div>
  </div>

</div>
<?php
}

function get_footer() {
  
  assets_loader( [ 'modernizr.js', 'jquery.js', 'main.js' ] );
  
}
