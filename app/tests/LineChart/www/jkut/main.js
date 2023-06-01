import * as iter from './_js/iter.js';import * as str from './_js/str.js';import * as bytes from './_js/bytes.js';import * as cryp from './_js/cryp.js';import * as dic from './_js/dic.js';import * as timer from './_js/timer.js';import * as js from './_js/js.js';import * as storage from './_js/storage.js';import * as sys from './_js/sys.js';import * as math from './_js/math.js';import * as domo from './_js/domo.js';import * as ui from './_js/ui.js';import * as arr from './_js/arr.js';import * as time from './_js/time.js';import * as client from './_js/client.js';import * as b64 from './_js/b64.js';




import *  as  lC from  "./libdm/lineChart.js";

const Q =sys.$checkNull( ui.q);

const Ch1 =sys.$checkNull( lC.mkExample());
Ch1.ExArea.width =sys.$checkExists(Ch1.ExArea.width,sys.$checkNull( 600));
Ch1.XAxis.fontSize =sys.$checkExists(Ch1.XAxis.fontSize,sys.$checkNull( 10));
Ch1.YAxis.fontSize =sys.$checkExists(Ch1.YAxis.fontSize,sys.$checkNull( 10));
Ch1.lang =sys.$checkExists(Ch1.lang,sys.$checkNull( "en"));

const Data =sys.$checkNull( lC.mkDataExample());
arr.push(Data.UnarySets, lC.mkUnarySet(0, lC.mkLineExample()));

Q("@body")
  .style("background-color:#f0f1f2")
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("table").att("align", "center")
    .add(Q("tr")
      .add(Q("td")
        .add(lC.mkWgExample()))))
  .add(Q("p").text("a"))
  .add(Q("p").text("a"))
  .add(Q("table").att("align", "center")
    .add(Q("tr")
      .add(Q("td")
        .add(lC.mkWg(Ch1, Data)))))
;
