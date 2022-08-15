import styled from '@emotion/styled';
import { Box } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const FlagBase = styled(Box)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  box-sizing: content-box;
  vertical-align: middle;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 100% 49494%;

  width: ${props => props.width}px;
  height: ${props => (props.height ? props.height : props.width * 0.6111111111112)}px;

  &.CH,
  &.NP {
    box-shadow: none !important;
  }
  &.DZ {
    background-position: center 0.2287%;
  }
  &.AO {
    background-position: center 0.4524%;
  }
  &.BJ {
    background-position: center 0.6721%;
  }
  &.BW {
    background-position: center 0.8958%;
  }
  &.BF {
    background-position: center 1.1162%;
  }
  &.BI {
    background-position: center 1.3379%;
  }
  &.CM {
    background-position: center 1.5589%;
  }
  &.CV {
    background-position: center 1.7805%;
  }
  &.CF {
    background-position: center 2.0047%;
  }
  &.TD {
    background-position: center 2.2247%;
  }
  &.CD {
    background-position: left 2.4467%;
  }
  &.DJ {
    background-position: left 2.6674%;
  }
  &.EG {
    background-position: center 2.8931%;
  }
  &.GQ {
    background-position: center 3.1125%;
  }
  &.ER {
    background-position: left 3.3325%;
  }
  &.ET {
    background-position: center 3.5542%;
  }
  &.GA {
    background-position: center 3.7759%;
  }
  &.GM {
    background-position: center 4.0015%;
  }
  &.GH {
    background-position: center 4.2229%;
  }
  &.GN {
    background-position: center 4.441%;
  }
  &.GW {
    background-position: left 4.66663%;
  }
  &.CI {
    background-position: center 4.8844%;
  }
  &.KE {
    background-position: center 5.1061%;
  }
  &.LS {
    background-position: center 5.3298%;
  }
  &.LR {
    background-position: left 5.5495%;
  }
  &.LY {
    background-position: center 5.7712%;
  }
  &.MG {
    background-position: center 5.994%;
  }
  &.MW {
    background-position: center 6.2156%;
  }
  &.ML {
    background-position: center 6.4363%;
  }
  &.MR {
    background-position: center 6.658%;
  }
  &.MU {
    background-position: center 6.8805%;
  }
  &.YT {
    background-position: center 7.1038%;
  }
  &.MA {
    background-position: center 7.3231%;
  }
  &.MZ {
    background-position: left 7.5448%;
  }
  &.NA {
    background-position: left 7.7661%;
  }
  &.NE {
    background-position: center 7.98937%;
  }
  &.NG {
    background-position: center 8.2099%;
  }
  &.CG {
    background-position: center 8.4316%;
  }
  &.RE {
    background-position: center 8.6533%;
  }
  &.RW {
    background-position: right 8.875%;
  }
  &.SH {
    background-position: center 9.0967%;
  }
  &.ST {
    background-position: center 9.32237%;
  }
  &.SN {
    background-position: center 9.5426%;
  }
  &.SC {
    background-position: left 9.7628%;
  }
  &.SL {
    background-position: center 9.9845%;
  }
  &.SO {
    background-position: center 10.2052%;
  }
  &.ZA {
    background-position: left 10.4269%;
  }
  &.SS {
    background-position: left 10.6486%;
  }
  &.SD {
    background-position: center 10.8703%;
  }
  &.SR {
    background-position: center 11.0945%;
  }
  &.SZ {
    background-position: center 11.3135%;
  }
  &.TG {
    background-position: left 11.5354%;
  }
  &.TN {
    background-position: center 11.7593%;
  }
  &.UG {
    background-position: center 11.9799%;
  }
  &.TZ {
    background-position: center 12.2005%;
  }
  &.EH {
    background-position: center 12.4222%;
  }
  &.YE {
    background-position: center 12.644%;
  }
  &.ZM {
    background-position: center 12.8664%;
  }
  &.ZW {
    background-position: left 13.0873%;
  }
  &.AI {
    background-position: center 13.309%;
  }
  &.AG {
    background-position: center 13.5307%;
  }
  &.AR {
    background-position: center 13.7524%;
  }
  &.AW {
    background-position: left 13.9741%;
  }
  &.BS {
    background-position: left 14.1958%;
  }
  &.BB {
    background-position: center 14.4175%;
  }
  &.BQ {
    background-position: center 14.6415%;
  }
  &.BZ {
    background-position: center 14.8609%;
  }
  &.BM {
    background-position: center 15.0826%;
  }
  &.BO {
    background-position: center 15.306%;
  }
  &.VG {
    background-position: center 15.528%;
  }
  &.BR {
    background-position: center 15.7496%;
  }
  &.CA {
    background-position: center 15.9694%;
  }
  &.KY {
    background-position: center 16.1911%;
  }
  &.CL {
    background-position: left 16.4128%;
  }
  &.CO {
    background-position: left 16.6345%;
  }
  &.KM {
    background-position: center 16.8562%;
  }
  &.CR {
    background-position: center 17.0779%;
  }
  &.CU {
    background-position: left 17.2996%;
  }
  &.CW {
    background-position: center 17.5213%;
  }
  &.DM {
    background-position: center 17.743%;
  }
  &.DO {
    background-position: center 17.968%;
  }
  &.EC {
    background-position: center 18.1864%;
  }
  &.SV {
    background-position: center 18.4081%;
  }
  &.FK {
    background-position: center 18.6298%;
  }
  &.GF {
    background-position: center 18.8515%;
  }
  &.GL {
    background-position: left 19.0732%;
  }
  &.GD {
    background-position: center 19.2987%;
  }
  &.GP {
    background-position: center 19.518%;
  }
  &.GT {
    background-position: center 19.7383%;
  }
  &.GY {
    background-position: center 19.96%;
  }
  &.HT {
    background-position: center 20.1817%;
  }
  &.HN {
    background-position: center 20.4034%;
  }
  &.JM {
    background-position: center 20.6241%;
  }
  &.MQ {
    background-position: center 20.8468%;
  }
  &.MX {
    background-position: center 21.0685%;
  }
  &.MS {
    background-position: center 21.2902%;
  }
  &.NI {
    background-position: center 21.5119%;
  }
  &.PA {
    background-position: center 21.7336%;
  }
  &.PY {
    background-position: center 21.9553%;
  }
  &.PE {
    background-position: center 22.177%;
  }
  &.PR {
    background-position: left 22.4002%;
  }
  &.BL {
    background-position: center 22.6204%;
  }
  &.KN {
    background-position: center 22.8421%;
  }
  &.LC {
    background-position: center 23.0638%;
  }
  &.PM {
    background-position: center 23.2855%;
  }
  &.VC {
    background-position: center 23.5072%;
  }
  &.SX {
    background-position: left 23.732%;
  }
  &.TT {
    background-position: center 23.9506%;
  }
  &.TC {
    background-position: center 24.1723%;
  }
  &.US {
    background-position: center 24.394%;
  }
  &.VI {
    background-position: center 24.6157%;
  }
  &.UY {
    background-position: left 24.8374%;
  }
  &.VE {
    background-position: center 25.0591%;
  }
  &.AB {
    background-position: center 25.279%;
  }
  &.AF {
    background-position: center 25.5025%;
  }
  &.AZ {
    background-position: center 25.7242%;
  }
  &.BD {
    background-position: center 25.9459%;
  }
  &.BT {
    background-position: center 26.1676%;
  }
  &.BN {
    background-position: center 26.3885%;
  }
  &.KH {
    background-position: center 26.611%;
  }
  &.CN {
    background-position: left 26.8327%;
  }
  &.GE {
    background-position: center 27.0544%;
  }
  &.HK {
    background-position: center 27.2761%;
  }
  &.IN {
    background-position: center 27.4978%;
  }
  &.ID {
    background-position: center 27.7195%;
  }
  &.JP {
    background-position: center 27.9412%;
  }
  &.KZ {
    background-position: center 28.1615%;
  }
  &.LA {
    background-position: center 28.3846%;
  }
  &.MO {
    background-position: center 28.6063%;
  }
  &.MY {
    background-position: center 28.829%;
  }
  &.MV {
    background-position: center 29.0497%;
  }
  &.MN {
    background-position: left 29.2714%;
  }
  &.MM {
    background-position: center 29.4931%;
  }
  &.NP {
    background-position: left 29.7148%;
  }
  &.KP {
    background-position: left 29.9365%;
  }
  &.MP {
    background-position: center 30.1582%;
  }
  &.PW {
    background-position: center 30.3799%;
  }
  &.PG {
    background-position: center 30.6016%;
  }
  &.PH {
    background-position: left 30.8233%;
  }
  &.SG {
    background-position: left 31.045%;
  }
  &.KR {
    background-position: center 31.2667%;
  }
  &.LK {
    background-position: right 31.4884%;
  }
  &.TW {
    background-position: left 31.7101%;
  }
  &.TJ {
    background-position: center 31.9318%;
  }
  &.TH {
    background-position: center 32.1535%;
  }
  &.TL {
    background-position: left 32.3752%;
  }
  &.TM {
    background-position: center 32.5969%;
  }
  &.VN {
    background-position: center 32.8186%;
  }
  &.AL {
    background-position: center 33.0403%;
  }
  &.AD {
    background-position: center 33.25975%;
  }
  &.AM {
    background-position: center 33.4837%;
  }
  &.AT {
    background-position: center 33.7054%;
  }
  &.BY {
    background-position: left 33.9271%;
  }
  &.BE {
    background-position: center 34.1488%;
  }
  &.BA {
    background-position: center 34.3705%;
  }
  &.BG {
    background-position: center 34.5922%;
  }
  &.HR {
    background-position: center 34.8139%;
  }
  &.CY {
    background-position: center 35.0356%;
  }
  &.CZ {
    background-position: left 35.2555%;
  }
  &.DK {
    background-position: center 35.479%;
  }
  &.EE {
    background-position: center 35.7007%;
  }
  &.FO {
    background-position: center 35.9224%;
  }
  &.FI {
    background-position: center 36.1441%;
  }
  &.FR {
    background-position: center 36.3658%;
  }
  &.DE {
    background-position: center 36.5875%;
  }
  &.GI {
    background-position: center 36.8092%;
  }
  &.GR {
    background-position: left 37.0309%;
  }
  &.HU {
    background-position: center 37.2526%;
  }
  &.IS {
    background-position: center 37.4743%;
  }
  &.IE {
    background-position: center 37.696%;
  }
  &.IM {
    background-position: center 37.9177%;
  }
  &.IT {
    background-position: center 38.1394%;
  }
  &.JE {
    background-position: center 38.3611%;
  }
  &.XK {
    background-position: center 38.5828%;
  }
  &.LV {
    background-position: center 38.8045%;
  }
  &.LI {
    background-position: left 39.0262%;
  }
  &.LT {
    background-position: center 39.2479%;
  }
  &.LU {
    background-position: center 39.4696%;
  }
  &.MT {
    background-position: left 39.6913%;
  }
  &.MD {
    background-position: center 39.913%;
  }
  &.MC {
    background-position: center 40.1347%;
  }
  &.ME {
    background-position: center 40.3564%;
  }
  &.NL {
    background-position: center 40.5781%;
  }
  &.MK {
    background-position: center 40.7998%;
  }
  &.NO {
    background-position: center 41.0215%;
  }
  &.PL {
    background-position: center 41.2432%;
  }
  &.PT {
    background-position: center 41.4649%;
  }
  &.RO {
    background-position: center 41.6866%;
  }
  &.RU {
    background-position: center 41.9083%;
  }
  &.SM {
    background-position: center 42.13%;
  }
  &.RS {
    background-position: center 42.3517%;
  }
  &.SK {
    background-position: center 42.5734%;
  }
  &.SI {
    background-position: center 42.7951%;
  }
  &.ES {
    background-position: left 43.0168%;
  }
  &.SE {
    background-position: center 43.2385%;
  }
  &.CH {
    background-position: center 43.4602%;
  }
  &.TR {
    background-position: center 43.6819%;
  }
  &.UA {
    background-position: center 43.9036%;
  }
  &.GB {
    background-position: center 44.1253%;
  }
  &.VA {
    background-position: right 44.347%;
  }
  &.BH {
    background-position: center 44.5687%;
  }
  &.IR {
    background-position: center 44.7904%;
  }
  &.IQ {
    background-position: center 45.0121%;
  }
  &.IL {
    background-position: center 45.2338%;
  }
  &.KW {
    background-position: left 45.4555%;
  }
  &.JO {
    background-position: left 45.6772%;
  }
  &.KG {
    background-position: center 45.897%;
  }
  &.LB {
    background-position: center 46.1206%;
  }
  &.OM {
    background-position: left 46.3423%;
  }
  &.PK {
    background-position: center 46.561%;
  }
  &.PS {
    background-position: center 46.7857%;
  }
  &.QA {
    background-position: center 47.0074%;
  }
  &.SA {
    background-position: center 47.2291%;
  }
  &.SY {
    background-position: center 47.4508%;
  }
  &.AE {
    background-position: center 47.6725%;
  }
  &.UZ {
    background-position: left 47.8942%;
  }
  &.AS {
    background-position: right 48.1159%;
  }
  &.AU {
    background-position: center 48.3376%;
  }
  &.CX {
    background-position: center 48.5593%;
  }
  &.CC {
    background-position: center 48.781%;
  }
  &.CK {
    background-position: center 49.002%;
  }
  &.FJ {
    background-position: center 49.2244%;
  }
  &.PF {
    background-position: center 49.4445%;
  }
  &.GU {
    background-position: center 49.6678%;
  }
  &.KI {
    background-position: center 49.8895%;
  }
  &.MH {
    background-position: left 50.1112%;
  }
  &.FM {
    background-position: center 50.3329%;
  }
  &.NC {
    background-position: center 50.5546%;
  }
  &.NZ {
    background-position: center 50.7763%;
  }
  &.NR {
    background-position: left 50.998%;
  }
  &.NU {
    background-position: center 51.2197%;
  }
  &.NF {
    background-position: center 51.4414%;
  }
  &.WS {
    background-position: left 51.6631%;
  }
  &.SB {
    background-position: left 51.8848%;
  }
  &.TK {
    background-position: center 52.1065%;
  }
  &.TO {
    background-position: left 52.3282%;
  }
  &.TV {
    background-position: center 52.5499%;
  }
  &.VU {
    background-position: left 52.7716%;
  }
  &.WF {
    background-position: center 52.9933%;
  }
`;
