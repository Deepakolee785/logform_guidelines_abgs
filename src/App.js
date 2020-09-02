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
      </Switch>
    </Router>
  )
}

export default App
