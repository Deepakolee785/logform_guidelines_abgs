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
      </Switch>
    </Router>
  )
}

export default App
