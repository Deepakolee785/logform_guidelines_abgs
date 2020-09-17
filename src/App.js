import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// nl_nl_test_set
import {
  GuidingPrinciples,
  LongFormGenericRules,
  TranscriptionQuality,
  Punctuation,
  Format,
  AgreedSpelling,
  DifficultUtterances,
} from './Guidelines/nl_nl_test_set'

//uk_ua
import {
  GuidingPrinciplesUK_UA,
  LongFormGenericRulesUK_UA,
  TranscriptionQualityUK_UA,
  PunctuationUK_UA,
  AgreedSpellingUK_UA,
  DifficultUtterancesUK_UA,
  FormatUK_UA,
} from './Guidelines/uk_ua_test_set'

// Nepali
import {
  AgreedSpellingNepali,
  DifficultUtterancesNepali,
  FormatNepali,
  GuidingPrinciplesNepali,
  LongFormGenericRulesNepali,
  PunctuationNepali,
  TranscriptionQualityNepali,
} from './Guidelines/nepali'

// Armenian
import {
  AgreedSpellingArmenian,
  DifficultUtterancesArmenian,
  FormatArmenian,
  GuidingPrinciplesArmenian,
  LongFormGenericRulesArmenian,
  PunctuationArmenian,
  TranscriptionQualityArmenian,
} from './Guidelines/Armenian'

// Bangla
import {
  AgreedSpellingBangla,
  DifficultUtterancesBangla,
  FormatBangla,
  GuidingPrinciplesBangla,
  LongFormGenericRulesBangla,
  PunctuationBangla,
  TranscriptionQualityBangla,
} from './Guidelines/Bangla'

// Belarusian

import {
  AgreedSpellingBelarusian,
  DifficultUtterancesBelarusian,
  FormatBelarusian,
  GuidingPrinciplesBelarusian,
  LongFormGenericRulesBelarusian,
  PunctuationBelarusian,
  TranscriptionQualityBelarusian,
} from './Guidelines/Belarusian'

// Burmese

import {
  AgreedSpellingBurmese,
  DifficultUtterancesBurmese,
  FormatBurmese,
  GuidingPrinciplesBurmese,
  LongFormGenericRulesBurmese,
  PunctuationBurmese,
  TranscriptionQualityBurmese,
} from './Guidelines/Burmese'

// Dutch

import {
  AgreedSpellingDutch,
  DifficultUtterancesDutch,
  FormatDutch,
  GuidingPrinciplesDutch,
  LongFormGenericRulesDutch,
  PunctuationDutch,
  TranscriptionQualityDutch,
} from './Guidelines/Dutch'
// Filipino

import {
  AgreedSpellingFilipino,
  DifficultUtterancesFilipino,
  FormatFilipino,
  GuidingPrinciplesFilipino,
  LongFormGenericRulesFilipino,
  PunctuationFilipino,
  TranscriptionQualityFilipino,
} from './Guidelines/Filipino'

// Georgian
import {
  AgreedSpellingGeorgian,
  DifficultUtterancesGeorgian,
  FormatGeorgian,
  GuidingPrinciplesGeorgian,
  LongFormGenericRulesGeorgian,
  PunctuationGeorgian,
  TranscriptionQualityGeorgian,
} from './Guidelines/Georgian'
// Greek
import {
  AgreedSpellingGreek,
  DifficultUtterancesGreek,
  FormatGreek,
  GuidingPrinciplesGreek,
  LongFormGenericRulesGreek,
  PunctuationGreek,
  TranscriptionQualityGreek,
} from './Guidelines/Greek'
// Gujarati
import {
  AgreedSpellingGujarati,
  DifficultUtterancesGujarati,
  FormatGujarati,
  GuidingPrinciplesGujarati,
  LongFormGenericRulesGujarati,
  PunctuationGujarati,
  TranscriptionQualityGujarati,
} from './Guidelines/Gujarati'
// Hindi
import {
  AgreedSpellingHindi,
  DifficultUtterancesHindi,
  FormatHindi,
  GuidingPrinciplesHindi,
  LongFormGenericRulesHindi,
  PunctuationHindi,
  TranscriptionQualityHindi,
} from './Guidelines/Hindi'

// Indonesian
import {
  AgreedSpellingIndonesian,
  DifficultUtterancesIndonesian,
  FormatIndonesian,
  GuidingPrinciplesIndonesian,
  LongFormGenericRulesIndonesian,
  PunctuationIndonesian,
  TranscriptionQualityIndonesian,
} from './Guidelines/Indonesian'
// Italian
import {
  AgreedSpellingItalian,
  DifficultUtterancesItalian,
  FormatItalian,
  GuidingPrinciplesItalian,
  LongFormGenericRulesItalian,
  PunctuationItalian,
  TranscriptionQualityItalian,
} from './Guidelines/Italian'
// Japnese
import {
  GuidingPrinciplesJapnese,
  LongFormGenericRulesJapnese,
} from './Guidelines/Japanese'

// Javanese
import {
  AgreedSpellingJavanese,
  DifficultUtterancesJavanese,
  FormatJavanese,
  GuidingPrinciplesJavanese,
  LongFormGenericRulesJavanese,
  PunctuationJavanese,
  TranscriptionQualityJavanese,
} from './Guidelines/Javanese'
// Kannada
import {
  AgreedSpellingKannada,
  DifficultUtterancesKannada,
  FormatKannada,
  GuidingPrinciplesKannada,
  LongFormGenericRulesKannada,
  PunctuationKannada,
  TranscriptionQualityKannada,
} from './Guidelines/Kannada'
// Korean
import {
  AgreedSpellingKorean,
  DifficultUtterancesKorean,
  FormatKorean,
  GuidingPrinciplesKorean,
  LongFormGenericRulesKorean,
  PunctuationKorean,
  TranscriptionQualityKorean,
} from './Guidelines/Korean'

// Macedonian
import {
  AgreedSpellingMacedonian,
  // DifficultUtterancesMacedonian,
  FormatMacedonian,
  GuidingPrinciplesMacedonian,
  LongFormGenericRulesMacedonian,
  PunctuationMacedonian,
  TranscriptionQualityMacedonian,
} from './Guidelines/Macedonian'
// Malay
import {
  AgreedSpellingMalay,
  DifficultUtterancesMalay,
  FormatMalay,
  GuidingPrinciplesMalay,
  LongFormGenericRulesMalay,
  PunctuationMalay,
  TranscriptionQualityMalay,
} from './Guidelines/Malay'
// Malayalam
import {
  AgreedSpellingMalayalam,
  DifficultUtterancesMalayalam,
  FormatMalayalam,
  GuidingPrinciplesMalayalam,
  LongFormGenericRulesMalayalam,
  PunctuationMalayalam,
  TranscriptionQualityMalayalam,
} from './Guidelines/Malayalam'
// Mandarin
import {
  AgreedSpellingMandarin,
  DifficultUtterancesMandarin,
  FormatMandarin,
  GuidingPrinciplesMandarin,
  LongFormGenericRulesMandarin,
  PunctuationMandarin,
  TranscriptionQualityMandarin,
} from './Guidelines/Mandarin'
// Marathi
import {
  AgreedSpellingMarathi,
  DifficultUtterancesMarathi,
  FormatMarathi,
  GuidingPrinciplesMarathi,
  LongFormGenericRulesMarathi,
  PunctuationMarathi,
  TranscriptionQualityMarathi,
} from './Guidelines/Marathi'
// Mongolian
import {
  AgreedSpellingMongolian,
  DifficultUtterancesMongolian,
  FormatMongolian,
  GuidingPrinciplesMongolian,
  LongFormGenericRulesMongolian,
  PunctuationMongolian,
  TranscriptionQualityMongolian,
} from './Guidelines/Mongolian'
// Noreweign
import {
  AgreedSpellingNoreweign,
  DifficultUtterancesNoreweign,
  FormatNoreweign,
  GuidingPrinciplesNoreweign,
  LongFormGenericRulesNoreweign,
  PunctuationNoreweign,
  TranscriptionQualityNoreweign,
} from './Guidelines/Noreweign'
// Pujabi
import {
  AgreedSpellingPujabi,
  DifficultUtterancesPujabi,
  FormatPujabi,
  GuidingPrinciplesPujabi,
  LongFormGenericRulesPujabi,
  PunctuationPujabi,
  TranscriptionQualityPujabi,
} from './Guidelines/Pujabi'
// Russian
import {
  AgreedSpellingRussian,
  DifficultUtterancesRussian,
  FormatRussian,
  GuidingPrinciplesRussian,
  LongFormGenericRulesRussian,
  PunctuationRussian,
  TranscriptionQualityRussian,
} from './Guidelines/Russian'
// Slovak
import {
  AgreedSpellingSlovak,
  DifficultUtterancesSlovak,
  FormatSlovak,
  GuidingPrinciplesSlovak,
  LongFormGenericRulesSlovak,
  PunctuationSlovak,
  TranscriptionQualitySlovak,
} from './Guidelines/Slovak'
// Slovene
import {
  AgreedSpellingSlovene,
  DifficultUtterancesSlovene,
  FormatSlovene,
  GuidingPrinciplesSlovene,
  LongFormGenericRulesSlovene,
  PunctuationSlovene,
  TranscriptionQualitySlovene,
} from './Guidelines/Slovene'
// Sundanese
import {
  AgreedSpellingSundanese,
  DifficultUtterancesSundanese,
  FormatSundanese,
  GuidingPrinciplesSundanese,
  LongFormGenericRulesSundanese,
  PunctuationSundanese,
  TranscriptionQualitySundanese,
} from './Guidelines/Sundanese'
// Swahili
import {
  AgreedSpellingSwahili,
  DifficultUtterancesSwahili,
  FormatSwahili,
  GuidingPrinciplesSwahili,
  LongFormGenericRulesSwahili,
  PunctuationSwahili,
  TranscriptionQualitySwahili,
} from './Guidelines/Swahili'
// Swedish
import {
  AgreedSpellingSwedish,
  DifficultUtterancesSwedish,
  FormatSwedish,
  GuidingPrinciplesSwedish,
  LongFormGenericRulesSwedish,
  PunctuationSwedish,
  TranscriptionQualitySwedish,
} from './Guidelines/Swedish'
// Tamil
import {
  AgreedSpellingTamil,
  DifficultUtterancesTamil,
  FormatTamil,
  GuidingPrinciplesTamil,
  LongFormGenericRulesTamil,
  PunctuationTamil,
  TranscriptionQualityTamil,
} from './Guidelines/Tamil'
// Telugu
import {
  AgreedSpellingTelugu,
  DifficultUtterancesTelugu,
  FormatTelugu,
  GuidingPrinciplesTelugu,
  LongFormGenericRulesTelugu,
  PunctuationTelugu,
  TranscriptionQualityTelugu,
} from './Guidelines/Telugu'
// Thai
import {
  AgreedSpellingThai,
  DifficultUtterancesThai,
  FormatThai,
  GuidingPrinciplesThai,
  LongFormGenericRulesThai,
  PunctuationThai,
  TranscriptionQualityThai,
} from './Guidelines/Thai'
// Turskish
import {
  AgreedSpellingTurskish,
  DifficultUtterancesTurskish,
  FormatTurskish,
  GuidingPrinciplesTurskish,
  LongFormGenericRulesTurskish,
  PunctuationTurskish,
  TranscriptionQualityTurskish,
} from './Guidelines/Turskish'
// Ukraninan
import {
  AgreedSpellingUkraninan,
  DifficultUtterancesUkraninan,
  FormatUkraninan,
  GuidingPrinciplesUkraninan,
  LongFormGenericRulesUkraninan,
  PunctuationUkraninan,
  TranscriptionQualityUkraninan,
} from './Guidelines/Ukraninan'
// Urdu
import {
  AgreedSpellingUrdu,
  DifficultUtterancesUrdu,
  FormatUrdu,
  GuidingPrinciplesUrdu,
  LongFormGenericRulesUrdu,
  PunctuationUrdu,
  TranscriptionQualityUrdu,
} from './Guidelines/Urdu'
// Vietnamese
import {
  AgreedSpellingVietnamese,
  DifficultUtterancesVietnamese,
  FormatVietnamese,
  GuidingPrinciplesVietnamese,
  LongFormGenericRulesVietnamese,
  PunctuationVietnamese,
  TranscriptionQualityVietnamese,
} from './Guidelines/Vietnamese'

import Home from './Home'

const App = () => {
  return (
    <Router>
      <Switch>
        {/* temporary redirect */}
        {/* <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/nl_nl_test_set/guiding_principles" />
          }}
        /> */}
        <Route exact path="/" component={Home} />
        {/* nl_nl_test_set routes */}
        <Route
          path="/nl_nl_test_set/guiding_principles"
          component={GuidingPrinciples}
        />
        <Route
          path="/nl_nl_test_set/longform_generic_rules"
          component={LongFormGenericRules}
        />
        <Route
          path="/nl_nl_test_set/transcription_quality"
          component={TranscriptionQuality}
        />
        <Route path="/nl_nl_test_set/punctuation" component={Punctuation} />
        <Route path="/nl_nl_test_set/format" component={Format} />
        <Route
          path="/nl_nl_test_set/agreed_spelling"
          component={AgreedSpelling}
        />
        <Route
          path="/nl_nl_test_set/difficult_utterances"
          component={DifficultUtterances}
        />
        {/* uk_ul routes */}
        <Route
          path="/uk_ua_test_set/guiding_principles"
          component={GuidingPrinciplesUK_UA}
        />
        <Route
          path="/uk_ua_test_set/longform_generic_rules"
          component={LongFormGenericRulesUK_UA}
        />
        <Route
          path="/uk_ua_test_set/transcription_quality"
          component={TranscriptionQualityUK_UA}
        />
        <Route
          path="/uk_ua_test_set/punctuation"
          component={PunctuationUK_UA}
        />
        <Route
          path="/uk_ua_test_set/agreed_spelling"
          component={AgreedSpellingUK_UA}
        />
        <Route
          path="/uk_ua_test_set/difficult_utterances"
          component={DifficultUtterancesUK_UA}
        />
        <Route path="/uk_ua_test_set/format" component={FormatUK_UA} />
        {/* nepali routes */}
        <Route
          path="/nepali/guiding_principles"
          component={GuidingPrinciplesNepali}
        />
        <Route
          path="/nepali/longform_generic_rules"
          component={LongFormGenericRulesNepali}
        />
        <Route
          path="/nepali/transcription_quality"
          component={TranscriptionQualityNepali}
        />
        <Route path="/nepali/punctuation" component={PunctuationNepali} />
        <Route
          path="/nepali/agreed_spelling"
          component={AgreedSpellingNepali}
        />
        <Route
          path="/nepali/difficult_utterances"
          component={DifficultUtterancesNepali}
        />
        <Route path="/nepali/format" component={FormatNepali} />
        {/* Armenian routes */}
        <Route
          path="/armenian/guiding_principles"
          component={GuidingPrinciplesArmenian}
        />
        <Route
          path="/armenian/longform_generic_rules"
          component={LongFormGenericRulesArmenian}
        />
        <Route
          path="/armenian/transcription_quality"
          component={TranscriptionQualityArmenian}
        />
        <Route path="/armenian/punctuation" component={PunctuationArmenian} />
        <Route
          path="/armenian/agreed_spelling"
          component={AgreedSpellingArmenian}
        />
        <Route
          path="/armenian/difficult_utterances"
          component={DifficultUtterancesArmenian}
        />
        <Route path="/armenian/format" component={FormatArmenian} />
        {/* Bangla routes */}
        <Route
          path="/bangla/guiding_principles"
          component={GuidingPrinciplesBangla}
        />
        <Route
          path="/bangla/longform_generic_rules"
          component={LongFormGenericRulesBangla}
        />
        <Route
          path="/bangla/transcription_quality"
          component={TranscriptionQualityBangla}
        />
        <Route path="/bangla/punctuation" component={PunctuationBangla} />
        <Route
          path="/bangla/agreed_spelling"
          component={AgreedSpellingBangla}
        />
        <Route
          path="/bangla/difficult_utterances"
          component={DifficultUtterancesBangla}
        />
        <Route path="/bangla/format" component={FormatBangla} />
        {/* Belarusian routes */}
        <Route
          path="/belarusian/guiding_principles"
          component={GuidingPrinciplesBelarusian}
        />
        <Route
          path="/belarusian/longform_generic_rules"
          component={LongFormGenericRulesBelarusian}
        />
        <Route
          path="/belarusian/transcription_quality"
          component={TranscriptionQualityBelarusian}
        />
        <Route
          path="/belarusian/punctuation"
          component={PunctuationBelarusian}
        />
        <Route
          path="/belarusian/agreed_spelling"
          component={AgreedSpellingBelarusian}
        />
        <Route
          path="/belarusian/difficult_utterances"
          component={DifficultUtterancesBelarusian}
        />
        <Route path="/belarusian/format" component={FormatBelarusian} />
        {/* Burmese routes */}
        <Route
          path="/burmese/guiding_principles"
          component={GuidingPrinciplesBurmese}
        />
        <Route
          path="/burmese/longform_generic_rules"
          component={LongFormGenericRulesBurmese}
        />
        <Route
          path="/burmese/transcription_quality"
          component={TranscriptionQualityBurmese}
        />
        <Route path="/burmese/punctuation" component={PunctuationBurmese} />
        <Route
          path="/burmese/agreed_spelling"
          component={AgreedSpellingBurmese}
        />
        <Route
          path="/burmese/difficult_utterances"
          component={DifficultUtterancesBurmese}
        />
        <Route path="/burmese/format" component={FormatBurmese} />
        {/* Dutch routes */}
        <Route
          path="/dutch/guiding_principles"
          component={GuidingPrinciplesDutch}
        />
        <Route
          path="/dutch/longform_generic_rules"
          component={LongFormGenericRulesDutch}
        />
        <Route
          path="/dutch/transcription_quality"
          component={TranscriptionQualityDutch}
        />
        <Route path="/dutch/punctuation" component={PunctuationDutch} />
        <Route path="/dutch/agreed_spelling" component={AgreedSpellingDutch} />
        <Route
          path="/dutch/difficult_utterances"
          component={DifficultUtterancesDutch}
        />
        <Route path="/dutch/format" component={FormatDutch} />
        {/* Filipino routes */}
        <Route
          path="/filipino/guiding_principles"
          component={GuidingPrinciplesFilipino}
        />
        <Route
          path="/filipino/longform_generic_rules"
          component={LongFormGenericRulesFilipino}
        />
        <Route
          path="/filipino/transcription_quality"
          component={TranscriptionQualityFilipino}
        />
        <Route path="/filipino/punctuation" component={PunctuationFilipino} />
        <Route
          path="/filipino/agreed_spelling"
          component={AgreedSpellingFilipino}
        />
        <Route
          path="/filipino/difficult_utterances"
          component={DifficultUtterancesFilipino}
        />
        <Route path="/filipino/format" component={FormatFilipino} />
        {/* Georgian routes */}
        <Route
          path="/georgian/guiding_principles"
          component={GuidingPrinciplesGeorgian}
        />
        <Route
          path="/georgian/longform_generic_rules"
          component={LongFormGenericRulesGeorgian}
        />
        <Route
          path="/georgian/transcription_quality"
          component={TranscriptionQualityGeorgian}
        />
        <Route path="/georgian/punctuation" component={PunctuationGeorgian} />
        <Route
          path="/georgian/agreed_spelling"
          component={AgreedSpellingGeorgian}
        />
        <Route
          path="/georgian/difficult_utterances"
          component={DifficultUtterancesGeorgian}
        />
        <Route path="/georgian/format" component={FormatGeorgian} />
        {/* Greek routes */}
        <Route
          path="/greek/guiding_principles"
          component={GuidingPrinciplesGreek}
        />
        <Route
          path="/greek/longform_generic_rules"
          component={LongFormGenericRulesGreek}
        />
        <Route
          path="/greek/transcription_quality"
          component={TranscriptionQualityGreek}
        />
        <Route path="/greek/punctuation" component={PunctuationGreek} />
        <Route path="/greek/agreed_spelling" component={AgreedSpellingGreek} />
        <Route
          path="/greek/difficult_utterances"
          component={DifficultUtterancesGreek}
        />
        <Route path="/greek/format" component={FormatGreek} />
        {/* Gujarati routes */}
        <Route
          path="/gujarati/guiding_principles"
          component={GuidingPrinciplesGujarati}
        />
        <Route
          path="/gujarati/longform_generic_rules"
          component={LongFormGenericRulesGujarati}
        />
        <Route
          path="/gujarati/transcription_quality"
          component={TranscriptionQualityGujarati}
        />
        <Route path="/gujarati/punctuation" component={PunctuationGujarati} />
        <Route
          path="/gujarati/agreed_spelling"
          component={AgreedSpellingGujarati}
        />
        <Route
          path="/gujarati/difficult_utterances"
          component={DifficultUtterancesGujarati}
        />
        <Route path="/gujarati/format" component={FormatGujarati} />
        {/* Hindi routes */}
        <Route
          path="/hindi/guiding_principles"
          component={GuidingPrinciplesHindi}
        />
        <Route
          path="/hindi/longform_generic_rules"
          component={LongFormGenericRulesHindi}
        />
        <Route
          path="/hindi/transcription_quality"
          component={TranscriptionQualityHindi}
        />
        <Route path="/hindi/punctuation" component={PunctuationHindi} />
        <Route path="/hindi/agreed_spelling" component={AgreedSpellingHindi} />
        <Route
          path="/hindi/difficult_utterances"
          component={DifficultUtterancesHindi}
        />
        <Route path="/hindi/format" component={FormatHindi} />
        {/* Indonesian routes */}
        <Route
          path="/indonesian/guiding_principles"
          component={GuidingPrinciplesIndonesian}
        />
        <Route
          path="/indonesian/longform_generic_rules"
          component={LongFormGenericRulesIndonesian}
        />
        <Route
          path="/indonesian/transcription_quality"
          component={TranscriptionQualityIndonesian}
        />
        <Route
          path="/indonesian/punctuation"
          component={PunctuationIndonesian}
        />
        <Route
          path="/indonesian/agreed_spelling"
          component={AgreedSpellingIndonesian}
        />
        <Route
          path="/indonesian/difficult_utterances"
          component={DifficultUtterancesIndonesian}
        />
        <Route path="/indonesian/format" component={FormatIndonesian} />
        {/* Italian routes */}
        <Route
          path="/italian/guiding_principles"
          component={GuidingPrinciplesItalian}
        />
        <Route
          path="/italian/longform_generic_rules"
          component={LongFormGenericRulesItalian}
        />
        <Route
          path="/italian/transcription_quality"
          component={TranscriptionQualityItalian}
        />
        <Route path="/italian/punctuation" component={PunctuationItalian} />
        <Route
          path="/italian/agreed_spelling"
          component={AgreedSpellingItalian}
        />
        <Route
          path="/italian/difficult_utterances"
          component={DifficultUtterancesItalian}
        />
        <Route path="/italian/format" component={FormatItalian} />
        {/* Japnese routes */}
        <Route
          path="/japanese/guiding_principles"
          component={GuidingPrinciplesJapnese}
        />
        <Route
          path="/japanese/longform_generic_rules"
          component={LongFormGenericRulesJapnese}
        />
        {/* Javanese routes */}
        <Route
          path="/javanese/guiding_principles"
          component={GuidingPrinciplesJavanese}
        />
        <Route
          path="/javanese/longform_generic_rules"
          component={LongFormGenericRulesJavanese}
        />
        <Route
          path="/javanese/transcription_quality"
          component={TranscriptionQualityJavanese}
        />
        <Route path="/javanese/punctuation" component={PunctuationJavanese} />
        <Route
          path="/javanese/agreed_spelling"
          component={AgreedSpellingJavanese}
        />
        <Route
          path="/javanese/difficult_utterances"
          component={DifficultUtterancesJavanese}
        />
        <Route path="/javanese/format" component={FormatJavanese} />
        {/* Kannada routes */}
        <Route
          path="/kannada/guiding_principles"
          component={GuidingPrinciplesKannada}
        />
        <Route
          path="/kannada/longform_generic_rules"
          component={LongFormGenericRulesKannada}
        />
        <Route
          path="/kannada/transcription_quality"
          component={TranscriptionQualityKannada}
        />
        <Route path="/kannada/punctuation" component={PunctuationKannada} />
        <Route
          path="/kannada/agreed_spelling"
          component={AgreedSpellingKannada}
        />
        <Route
          path="/kannada/difficult_utterances"
          component={DifficultUtterancesKannada}
        />
        <Route path="/kannada/format" component={FormatKannada} />
        {/* Korean routes */}
        <Route
          path="/korean/guiding_principles"
          component={GuidingPrinciplesKorean}
        />
        <Route
          path="/korean/longform_generic_rules"
          component={LongFormGenericRulesKorean}
        />
        <Route
          path="/korean/transcription_quality"
          component={TranscriptionQualityKorean}
        />
        <Route path="/korean/punctuation" component={PunctuationKorean} />
        <Route
          path="/korean/agreed_spelling"
          component={AgreedSpellingKorean}
        />
        <Route
          path="/korean/difficult_utterances"
          component={DifficultUtterancesKorean}
        />
        <Route path="/korean/format" component={FormatKorean} />
        {/* Macedonian routes */}
        <Route
          path="/macedonian/guiding_principles"
          component={GuidingPrinciplesMacedonian}
        />
        <Route
          path="/macedonian/longform_generic_rules"
          component={LongFormGenericRulesMacedonian}
        />
        <Route
          path="/macedonian/transcription_quality"
          component={TranscriptionQualityMacedonian}
        />
        <Route
          path="/macedonian/punctuation"
          component={PunctuationMacedonian}
        />
        <Route
          path="/macedonian/agreed_spelling"
          component={AgreedSpellingMacedonian}
        />
        {/* <Route
          path="/macedonian/difficult_utterances"
          component={DifficultUtterancesMacedonian}
        /> */}
        <Route path="/macedonian/format" component={FormatMacedonian} />
        {/* Malay routes */}
        <Route
          path="/malay/guiding_principles"
          component={GuidingPrinciplesMalay}
        />
        <Route
          path="/malay/longform_generic_rules"
          component={LongFormGenericRulesMalay}
        />
        <Route
          path="/malay/transcription_quality"
          component={TranscriptionQualityMalay}
        />
        <Route path="/malay/punctuation" component={PunctuationMalay} />
        <Route path="/malay/agreed_spelling" component={AgreedSpellingMalay} />
        <Route
          path="/malay/difficult_utterances"
          component={DifficultUtterancesMalay}
        />
        <Route path="/malay/format" component={FormatMalay} />
        {/* Malayalam routes */}
        <Route
          path="/malayalam/guiding_principles"
          component={GuidingPrinciplesMalayalam}
        />
        <Route
          path="/malayalam/longform_generic_rules"
          component={LongFormGenericRulesMalayalam}
        />
        <Route
          path="/malayalam/transcription_quality"
          component={TranscriptionQualityMalayalam}
        />
        <Route path="/malayalam/punctuation" component={PunctuationMalayalam} />
        <Route
          path="/malayalam/agreed_spelling"
          component={AgreedSpellingMalayalam}
        />
        <Route
          path="/malayalam/difficult_utterances"
          component={DifficultUtterancesMalayalam}
        />
        <Route path="/malayalam/format" component={FormatMalayalam} />
        {/* Mandarin routes */}
        <Route
          path="/mandarin/guiding_principles"
          component={GuidingPrinciplesMandarin}
        />
        <Route
          path="/mandarin/longform_generic_rules"
          component={LongFormGenericRulesMandarin}
        />
        <Route
          path="/mandarin/transcription_quality"
          component={TranscriptionQualityMandarin}
        />
        <Route path="/mandarin/punctuation" component={PunctuationMandarin} />
        <Route
          path="/mandarin/agreed_spelling"
          component={AgreedSpellingMandarin}
        />
        <Route
          path="/mandarin/difficult_utterances"
          component={DifficultUtterancesMandarin}
        />
        <Route path="/mandarin/format" component={FormatMandarin} />
        {/* Marathi routes */}
        <Route
          path="/marathi/guiding_principles"
          component={GuidingPrinciplesMarathi}
        />
        <Route
          path="/marathi/longform_generic_rules"
          component={LongFormGenericRulesMarathi}
        />
        <Route
          path="/marathi/transcription_quality"
          component={TranscriptionQualityMarathi}
        />
        <Route path="/marathi/punctuation" component={PunctuationMarathi} />
        <Route
          path="/marathi/agreed_spelling"
          component={AgreedSpellingMarathi}
        />
        <Route
          path="/marathi/difficult_utterances"
          component={DifficultUtterancesMarathi}
        />
        <Route path="/marathi/format" component={FormatMarathi} />
        {/* Mongolian routes */}
        <Route
          path="/mongolian/guiding_principles"
          component={GuidingPrinciplesMongolian}
        />
        <Route
          path="/mongolian/longform_generic_rules"
          component={LongFormGenericRulesMongolian}
        />
        <Route
          path="/mongolian/transcription_quality"
          component={TranscriptionQualityMongolian}
        />
        <Route path="/mongolian/punctuation" component={PunctuationMongolian} />
        <Route
          path="/mongolian/agreed_spelling"
          component={AgreedSpellingMongolian}
        />
        <Route
          path="/mongolian/difficult_utterances"
          component={DifficultUtterancesMongolian}
        />
        <Route path="/mongolian/format" component={FormatMongolian} />
        {/* Noreweign routes */}
        <Route
          path="/noreweign/guiding_principles"
          component={GuidingPrinciplesNoreweign}
        />
        <Route
          path="/noreweign/longform_generic_rules"
          component={LongFormGenericRulesNoreweign}
        />
        <Route
          path="/noreweign/transcription_quality"
          component={TranscriptionQualityNoreweign}
        />
        <Route path="/noreweign/punctuation" component={PunctuationNoreweign} />
        <Route
          path="/noreweign/agreed_spelling"
          component={AgreedSpellingNoreweign}
        />
        <Route
          path="/noreweign/difficult_utterances"
          component={DifficultUtterancesNoreweign}
        />
        <Route path="/noreweign/format" component={FormatNoreweign} />
        {/* Pujabi routes */}
        <Route
          path="/pujabi/guiding_principles"
          component={GuidingPrinciplesPujabi}
        />
        <Route
          path="/pujabi/longform_generic_rules"
          component={LongFormGenericRulesPujabi}
        />
        <Route
          path="/pujabi/transcription_quality"
          component={TranscriptionQualityPujabi}
        />
        <Route path="/pujabi/punctuation" component={PunctuationPujabi} />
        <Route
          path="/pujabi/agreed_spelling"
          component={AgreedSpellingPujabi}
        />
        <Route
          path="/pujabi/difficult_utterances"
          component={DifficultUtterancesPujabi}
        />
        <Route path="/pujabi/format" component={FormatPujabi} />
        {/* Russian routes */}
        <Route
          path="/russian/guiding_principles"
          component={GuidingPrinciplesRussian}
        />
        <Route
          path="/russian/longform_generic_rules"
          component={LongFormGenericRulesRussian}
        />
        <Route
          path="/russian/transcription_quality"
          component={TranscriptionQualityRussian}
        />
        <Route path="/russian/punctuation" component={PunctuationRussian} />
        <Route
          path="/russian/agreed_spelling"
          component={AgreedSpellingRussian}
        />
        <Route
          path="/russian/difficult_utterances"
          component={DifficultUtterancesRussian}
        />
        <Route path="/russian/format" component={FormatRussian} />
        {/* Slovak routes */}
        <Route
          path="/slovak/guiding_principles"
          component={GuidingPrinciplesSlovak}
        />
        <Route
          path="/slovak/longform_generic_rules"
          component={LongFormGenericRulesSlovak}
        />
        <Route
          path="/slovak/transcription_quality"
          component={TranscriptionQualitySlovak}
        />
        <Route path="/slovak/punctuation" component={PunctuationSlovak} />
        <Route
          path="/slovak/agreed_spelling"
          component={AgreedSpellingSlovak}
        />
        <Route
          path="/slovak/difficult_utterances"
          component={DifficultUtterancesSlovak}
        />
        <Route path="/slovak/format" component={FormatSlovak} />
        {/* Slovene routes */}
        <Route
          path="/slovene/guiding_principles"
          component={GuidingPrinciplesSlovene}
        />
        <Route
          path="/slovene/longform_generic_rules"
          component={LongFormGenericRulesSlovene}
        />
        <Route
          path="/slovene/transcription_quality"
          component={TranscriptionQualitySlovene}
        />
        <Route path="/slovene/punctuation" component={PunctuationSlovene} />
        <Route
          path="/slovene/agreed_spelling"
          component={AgreedSpellingSlovene}
        />
        <Route
          path="/slovene/difficult_utterances"
          component={DifficultUtterancesSlovene}
        />
        <Route path="/slovene/format" component={FormatSlovene} />
        {/* Sundanese routes */}
        <Route
          path="/sundanese/guiding_principles"
          component={GuidingPrinciplesSundanese}
        />
        <Route
          path="/sundanese/longform_generic_rules"
          component={LongFormGenericRulesSundanese}
        />
        <Route
          path="/sundanese/transcription_quality"
          component={TranscriptionQualitySundanese}
        />
        <Route path="/sundanese/punctuation" component={PunctuationSundanese} />
        <Route
          path="/sundanese/agreed_spelling"
          component={AgreedSpellingSundanese}
        />
        <Route
          path="/sundanese/difficult_utterances"
          component={DifficultUtterancesSundanese}
        />
        <Route path="/sundanese/format" component={FormatSundanese} />
        {/* Swahili routes */}
        <Route
          path="/swahili/guiding_principles"
          component={GuidingPrinciplesSwahili}
        />
        <Route
          path="/swahili/longform_generic_rules"
          component={LongFormGenericRulesSwahili}
        />
        <Route
          path="/swahili/transcription_quality"
          component={TranscriptionQualitySwahili}
        />
        <Route path="/swahili/punctuation" component={PunctuationSwahili} />
        <Route
          path="/swahili/agreed_spelling"
          component={AgreedSpellingSwahili}
        />
        <Route
          path="/swahili/difficult_utterances"
          component={DifficultUtterancesSwahili}
        />
        <Route path="/swahili/format" component={FormatSwahili} />
        {/* Swedish routes */}
        <Route
          path="/swedish/guiding_principles"
          component={GuidingPrinciplesSwedish}
        />
        <Route
          path="/swedish/longform_generic_rules"
          component={LongFormGenericRulesSwedish}
        />
        <Route
          path="/swedish/transcription_quality"
          component={TranscriptionQualitySwedish}
        />
        <Route path="/swedish/punctuation" component={PunctuationSwedish} />
        <Route
          path="/swedish/agreed_spelling"
          component={AgreedSpellingSwedish}
        />
        <Route
          path="/swedish/difficult_utterances"
          component={DifficultUtterancesSwedish}
        />
        <Route path="/swedish/format" component={FormatSwedish} />
        {/* Tamil routes */}
        <Route
          path="/tamil/guiding_principles"
          component={GuidingPrinciplesTamil}
        />
        <Route
          path="/tamil/longform_generic_rules"
          component={LongFormGenericRulesTamil}
        />
        <Route
          path="/tamil/transcription_quality"
          component={TranscriptionQualityTamil}
        />
        <Route path="/tamil/punctuation" component={PunctuationTamil} />
        <Route path="/tamil/agreed_spelling" component={AgreedSpellingTamil} />
        <Route
          path="/tamil/difficult_utterances"
          component={DifficultUtterancesTamil}
        />
        <Route path="/tamil/format" component={FormatTamil} />
        {/* Telugu routes */}
        <Route
          path="/telugu/guiding_principles"
          component={GuidingPrinciplesTelugu}
        />
        <Route
          path="/telugu/longform_generic_rules"
          component={LongFormGenericRulesTelugu}
        />
        <Route
          path="/telugu/transcription_quality"
          component={TranscriptionQualityTelugu}
        />
        <Route path="/telugu/punctuation" component={PunctuationTelugu} />
        <Route
          path="/telugu/agreed_spelling"
          component={AgreedSpellingTelugu}
        />
        <Route
          path="/telugu/difficult_utterances"
          component={DifficultUtterancesTelugu}
        />
        <Route path="/telugu/format" component={FormatTelugu} />
        {/* Thai routes */}
        <Route
          path="/thai/guiding_principles"
          component={GuidingPrinciplesThai}
        />
        <Route
          path="/thai/longform_generic_rules"
          component={LongFormGenericRulesThai}
        />
        <Route
          path="/thai/transcription_quality"
          component={TranscriptionQualityThai}
        />
        <Route path="/thai/punctuation" component={PunctuationThai} />
        <Route path="/thai/agreed_spelling" component={AgreedSpellingThai} />
        <Route
          path="/thai/difficult_utterances"
          component={DifficultUtterancesThai}
        />
        <Route path="/thai/format" component={FormatThai} />
        {/* Turskish routes */}
        <Route
          path="/turskish/guiding_principles"
          component={GuidingPrinciplesTurskish}
        />
        <Route
          path="/turskish/longform_generic_rules"
          component={LongFormGenericRulesTurskish}
        />
        <Route
          path="/turskish/transcription_quality"
          component={TranscriptionQualityTurskish}
        />
        <Route path="/turskish/punctuation" component={PunctuationTurskish} />
        <Route
          path="/turskish/agreed_spelling"
          component={AgreedSpellingTurskish}
        />
        <Route
          path="/turskish/difficult_utterances"
          component={DifficultUtterancesTurskish}
        />
        <Route path="/turskish/format" component={FormatTurskish} />
        {/* Ukraninan routes */}
        <Route
          path="/ukraninan/guiding_principles"
          component={GuidingPrinciplesUkraninan}
        />
        <Route
          path="/ukraninan/longform_generic_rules"
          component={LongFormGenericRulesUkraninan}
        />
        <Route
          path="/ukraninan/transcription_quality"
          component={TranscriptionQualityUkraninan}
        />
        <Route path="/ukraninan/punctuation" component={PunctuationUkraninan} />
        <Route
          path="/ukraninan/agreed_spelling"
          component={AgreedSpellingUkraninan}
        />
        <Route
          path="/ukraninan/difficult_utterances"
          component={DifficultUtterancesUkraninan}
        />
        <Route path="/ukraninan/format" component={FormatUkraninan} />
        {/* Urdu routes */}
        <Route
          path="/urdu/guiding_principles"
          component={GuidingPrinciplesUrdu}
        />
        <Route
          path="/urdu/longform_generic_rules"
          component={LongFormGenericRulesUrdu}
        />
        <Route
          path="/urdu/transcription_quality"
          component={TranscriptionQualityUrdu}
        />
        <Route path="/urdu/punctuation" component={PunctuationUrdu} />
        <Route path="/urdu/agreed_spelling" component={AgreedSpellingUrdu} />
        <Route
          path="/urdu/difficult_utterances"
          component={DifficultUtterancesUrdu}
        />
        <Route path="/urdu/format" component={FormatUrdu} />
        {/* Vietnamese routes */}
        <Route
          path="/vietnamese/guiding_principles"
          component={GuidingPrinciplesVietnamese}
        />
        <Route
          path="/vietnamese/longform_generic_rules"
          component={LongFormGenericRulesVietnamese}
        />
        <Route
          path="/vietnamese/transcription_quality"
          component={TranscriptionQualityVietnamese}
        />
        <Route
          path="/vietnamese/punctuation"
          component={PunctuationVietnamese}
        />
        <Route
          path="/vietnamese/agreed_spelling"
          component={AgreedSpellingVietnamese}
        />
        <Route
          path="/vietnamese/difficult_utterances"
          component={DifficultUtterancesVietnamese}
        />
        <Route path="/vietnamese/format" component={FormatVietnamese} />
      </Switch>
    </Router>
  )
}

export default App
