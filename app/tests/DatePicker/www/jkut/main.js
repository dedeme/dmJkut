import * as iter from './_js/iter.js';import * as str from './_js/str.js';import * as bytes from './_js/bytes.js';import * as cryp from './_js/cryp.js';import * as dic from './_js/dic.js';import * as timer from './_js/timer.js';import * as js from './_js/js.js';import * as storage from './_js/storage.js';import * as sys from './_js/sys.js';import * as math from './_js/math.js';import * as domo from './_js/domo.js';import * as ui from './_js/ui.js';import * as arr from './_js/arr.js';import * as time from './_js/time.js';import * as client from './_js/client.js';import * as b64 from './_js/b64.js';




import * as datePicker from  "./libdm/datePicker.js";

const Q =sys.$checkNull( ui.q);


 function datePicker1()  {sys.$params(arguments.length, 0);
   return Q("div")
    .add(Q("h2")
      .html("DatePicker 1"))
    .add(datePicker.mkWg(datePicker.mk(
        true,
        time.addDays(time.now(), 2),
        function(d)  {sys.$params(arguments.length, 1); ui.alert("Picked date is '" + d + "'");}
      )));
};


 function datePicker2()  {sys.$params(arguments.length, 0);
  const bt =sys.$checkNull( Q("button")
    .html("Date Picker"))
  ;

  const Dp =sys.$checkNull( datePicker.mk(
    false,
    time.addDays(time.now(), 2),
    function(d)  {sys.$params(arguments.length, 1); ui.alert("Picked date is '" + d + "'");}
  ));

   return Q("div")
    .add(Q("h2")
      .html("DatePicker 2"))
    .add(Q("p")
      .add(datePicker.mkButton(Dp, bt))
      .add(Q("span")
        .html("Next Text")))
    .add(Q("h3")
      .html("Some text"));
};


 function datePicker3()  {sys.$params(arguments.length, 0);
  const tx =sys.$checkNull( Q("input")
    .att("type", "text"))
  ;

  const Dp =sys.$checkNull( datePicker.mk(
    true,
    time.addDays(time.now(), 2),
    function(d)  {sys.$params(arguments.length, 1); ui.alert("Picked date is '" + d + "'");}
  ));

   return Q("div")
    .add(Q("h2")
      .html("DatePicker 3"))
    .add(Q("p")
      .add(datePicker.mkText(Dp, tx))
      .add(Q("span")
        .html("Next Text")))
    .add(Q("h3")
      .html("Some text"));
};

Q("@body")
  .add(datePicker1())
  .add(datePicker2())
  .add(datePicker3())
;
