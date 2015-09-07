/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2140, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("login-erro");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_form-email}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("email");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_form-senha}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("senha");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bg-fade}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-931308434");