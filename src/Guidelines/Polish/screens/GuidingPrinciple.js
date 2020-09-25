import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import styles from '../css/styles.module.css'
import Wrapper from '../Wrapper'

const GuidingPrinciples = () => {
  const classes = useStyles()
  const headingIds = [
    'difficult-utterance',
    'aggreed-spelling',
    'punctuation',
    'format',
  ]
  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Polish" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              {' '}
              <p className={'large-heading'}>
                Transcription guiding principles
              </p>
              <p className={styles.block_1}>
                <span className={styles.text_2}>
                  This document summarizes the guiding principles for certain
                  types of phrases, that are{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  transcribed in ways that conflict with standard grammar rules
                  for transcription{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  language. For language specific transcription, follow the
                  language specific written{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>domain convention.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="difficult-utterance">
                <p className={'heading'}>Difficult utterances</p>
                <p className={styles.block_3}>
                  <span className={styles.text_2}>
                    Everything relating to problematic utterances (background
                    noise, false starts, etc.) or{' '}
                  </span>
                  <span className={styles.text_3}>
                    {' '}
                    different language varieties.{' '}
                  </span>
                </p>
                <p className={styles.block_4}>
                  <span className={styles.text_4}>Skipping a prompt</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_5}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If you can't understand part of the audio, transcribe only
                    the part you can{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    understand. For the part you cannot understand, create a
                    separate speaker{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    segment and add the Unintelligible label.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_6}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    For utterances that contain speech that is user-generated,
                    pre-recorded, or{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    synthesized, transcribe all of it.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_7}>
                  <span className={styles.text_4}>
                    Hesitations and truncations
                  </span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_8}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If a very small part of a word (at most one syllable) has
                    been cut off, and you{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    know what the word is supposed to be, transcribe the entire
                    word. If you are not{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    sure what the word should be, do not transcribe the word at
                    all. Do not put{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    punctuation after words that have been cut off.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_9}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If a quotation is cut off in the middle, use an end
                    quotation mark anyway.
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe only numbers that you hear even if the speaker
                    didn't finish saying the{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>entire number.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_10}>
                  <span className={styles.text_4}>Accents</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_11}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If you hear a word with non-standard pronunciation,
                    transcribe the word using the{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>standard spelling</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>where is dat </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>Where is that? </span>
                </p>
              </div>
              <div id="aggreed-spelling">
                <p className={'heading'}>Agreed spelling</p>
                <p className={'text'}>
                  <span className={styles.text_2}>
                    Spelling conventions for words where several options are
                    thinkable, as well as proper{' '}
                  </span>
                  <span className={styles.text_3}> names. </span>
                </p>
                <p className={styles.block_4}>
                  <span className={styles.text_4}>Spelling out</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_16}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If a word is spelled out, write it with spaces in between.
                    This rule does not apply{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    to acronyms, URLs, or email addresses.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_17}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    how do you get to c o s t c o{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    How do you get to c o s t c o?{' '}
                  </span>
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_4}>Interjections</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_19}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe words representing laughter or other non speech
                    vocalizations. Some{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    of these words might be:
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_11}>
                    huh, woah, okay, yep, uh-huh, mhm, nah{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_11}>
                    This list is not exhaustive of all true interjections.
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_13}>
                    Annotate laughter that is included within speech.
                  </span>
                  <span className={styles.text_11}> </span>
                </p>
                <p className={styles.block_21}>
                  <span className={styles.text_4}>Proper names</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_22}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    For proper names, always use the official spelling and
                    punctuation.
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Example Audio: </span>
                  <span className={styles.text_8}>will i am </span>
                </p>
                <p className={styles.block_23}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>will.i.am </span>
                </p>
                <p className={styles.block_24}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If a personal name could have multiple spellings and context
                    does not help{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    choose a spelling, use the spelling that yields the most
                    Google search hits when{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    you search for the name followed by the word "name" (without
                    quotation marks){' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>(e.g. "Anna name").</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_17}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>mcdonald </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>MacDonald </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_4}>Brand and product</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_26}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_13}>
                    Format brand and company names as officially formatted
                  </span>
                  <span className={styles.text_11}> </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    the team is sponsored by united healthcare
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    The team is sponsored by UnitedHealthcare.
                  </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_4}>Media title</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_26}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_13}>
                    Write media titles as they are most commonly written.
                  </span>
                  <span className={styles.text_11}> </span>
                </p>
                <p className={styles.block_27}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    screenshots of call of duty black ops two
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    screenshots of Call of Duty: Black Ops 2{' '}
                  </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_4}>Multiple spellings</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_29}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If you hear a word that does not sound like a standard word
                    of your language{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    because there is a small sound change (i.e. accent, speech
                    errors, speech{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    impairment, etc.), transcribe the intended word.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_17}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    where is the nearest liberry{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    Where is the nearest library?{' '}
                  </span>
                </p>
                <p className={styles.block_30}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If you hear a word that does not sound like a standard word
                    of your language, but{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    it is obviously based on real words, suffixes, prefixes,
                    infixes or circumfixes,{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>transcribe as is.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_31}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>interpretate </span>
                </p>
                <p className={styles.block_32}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If you hear a word that does not sound like a standard word
                    of your language{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    because it appears to be nonsense, first search for the word
                    in Google. If there is{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    a clear candidate, transcribe that word. If there is not a
                    clear candidate, but it is{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    easy to spell and articulated clearly, transcribe it anyway.
                    If there is no clear{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    candidate and it is not easy to spell, create a separate
                    speaker segment and add{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    the Unintelligible label.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>Souk Abdali </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Explanation: </span>
                  <span className={styles.text_8}>
                    <span className={styles.calibre1}>
                      User says Souk Abdali. Transcriber searches “sukabdali”,
                      finds correct results. Transcribe Souk Abdali.
                    </span>
                  </span>
                </p>
              </div>
              <div id="punctuation">
                <p className={'heading'}>Punctuation</p>
                <p className={styles.block_35}>
                  <span className={styles.text_2}>
                    Follow the punctuation regulations of your locale.
                    Additional conventions are outlined in{' '}
                  </span>
                  <span className={styles.text_3}> this section. </span>
                </p>
                <p className={styles.block_7}>
                  <span className={styles.text_4}>
                    Fragments versus sentences
                  </span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_36}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Answers to questions and sentences with dropped subjects
                    should be{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    transcribed with ending punctuation.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_37}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    Who are you talking about? The guy next door.
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Explanation: </span>
                  <span className={styles.text_11}>two speakers </span>
                </p>
                <p className={styles.block_38}>
                  <span className={styles.text_4}>Commas</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_39}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_13}>
                    Only use commas if they are required according to language
                    grammar.
                  </span>
                  <span className={styles.text_11}> </span>
                  <span className={styles.text_16}>Colon and quotation</span>
                </p>
                <p className={styles.block_40}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If a speaker is quoting another person, transcribe a comma
                    before the quoted{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>speech.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    my friend said alligator crocodile{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    My friend said, "alligator crocodile".{' '}
                  </span>
                </p>
                <p className={styles.block_41}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If the quoted text is a complete sentence, transcribe ending
                    punctuation inside{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    the quotation marks. In cases like these, do not add an
                    additional ending{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    punctuation after the main sentence.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    jane asked are we meeting at three o clock
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    Jane asked, "Are we meeting at 3:00?"{' '}
                  </span>
                </p>
                <p className={styles.block_42}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Do not use quotation marks for metalinguistic uses of words
                    or phrases. These{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    uses include defining the word, talking about the spelling
                    of the word, or any{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    other type of reference to the word itself as a thing.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_31}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    He just said the word zucchini.{' '}
                  </span>
                </p>
                <p className={styles.block_38}>
                  <span className={styles.text_4}>Other symbols</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_43}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Apart from standard letters, you should not use any other
                    symbol than: 0-9{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;
                    {}
                    []√/@#$€£₹+=
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>%*&amp;-.;</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_44}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    When two opposing teams are mentioned, include a hyphen
                    between their{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>names.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_45}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    are you going to the saints bears game{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    Are you going to the Saints-Bears game?{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_13}>
                    Include a hyphen between locations in flight itineraries.
                  </span>
                  <span className={styles.text_11}> </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>rome london flight </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>Rome-London flight </span>
                </p>
                <p className={styles.block_46}>
                  <span className={styles.text_4}>Spoken punctuation</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_47}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    For sentence-level spoken punctuation, write out the full
                    word or words between{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    curly brackets. Do not add punctuation symbols after spoken
                    punctuation. Be{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>careful with homonyms.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_31}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>okay dot dot dot </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    Okay {`{dot} {dot} {dot}`}{' '}
                  </span>
                </p>
              </div>
              <div id="format">
                <p className={'heading'}>Format</p>
                <p className={styles.block_49}>
                  <span className={styles.text_2}>
                    Transcribe numbers, abbreviations etc. following the
                    formatting conventions in this{' '}
                  </span>
                  <span className={styles.text_3}> section.</span>
                </p>
                <p className={styles.block_50}>
                  <span className={styles.text_4}>Number</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_51}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Cardinals and ordinals from 0 to 9 are written with letters
                    (except for measures{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    and currency - see Currency and Unit). Use digits for
                    cardinals and ordinals 10{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    and above, even if they are coordinated with numbers under
                    10. Transcribe all{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    decimal numbers as digits.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_17}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    I have six dogs and 12 parakeets.{' '}
                  </span>
                </p>
                <p className={styles.block_52}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    In math expressions or units &amp; measures, transcribe
                    fraction words using{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    numerals and slashes. Be careful not to use pre-combined
                    fractions like "1⁄4".
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Example Audio: </span>
                  <span className={styles.text_8}>
                    in three fourths of a mile turn right{' '}
                  </span>
                </p>
                <p className={styles.block_17}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    In 3/4 of a mi, turn right.{' '}
                  </span>
                </p>
                <p className={styles.block_53}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    For mixed numbers in math expressions and units &amp;
                    measures, transcribe them{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>using numerals.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_54}>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Example Audio: </span>
                  <span className={styles.text_8}>
                    the koala weight twelve and a third pounds yesterday{' '}
                  </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Correct: </span>
                  <span className={styles.text_8}>
                    The koala weighed 12 and 1/3 lb yesterday.{' '}
                  </span>
                </p>
                <p className={styles.block_55}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    When referring to items (not units or measures), write
                    fractions out in words.{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    With mixed numbers, write the whole number part out in words
                    if it is under ten,{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    otherwise write it with numerals.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    twelve and a half pumpkin pies were made{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    12 and a half pumpkin pies were made.{' '}
                  </span>
                </p>
                <p className={styles.block_56}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe percentages using numerals followed by the "%"
                    sign. In the unlikely{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    case that you encounter a number of a million or greater
                    used as a percentage,{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>spell it out.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_57}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>two percent milk </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>2% milk </span>
                </p>
                <p className={styles.block_58}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Use Roman numerals only when part of an official name or
                    title.
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Example Audio: </span>
                  <span className={styles.text_8}>king henry the eighth </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>King Henry VIII </span>
                </p>
                <p className={styles.block_59}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Example Audio: </span>
                  <span className={styles.text_8}>
                    season three episode two{' '}
                  </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>season 3 episode 2 </span>
                </p>
                <p className={styles.block_60}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe phone numbers using the most common format(s) in
                    the{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>transcription language.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_61}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe phone numbers as you would write them down in
                    their natural groups.{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    When applicable, the STD code should be surrounded by
                    spaces.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_62}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Math expressions should be transcribed with numerals and
                    math symbols with{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>spaces in between them.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    five times six to the third{' '}
                  </span>
                </p>
                <p className={styles.block_27}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>5 / 6 ^ 3</span>
                </p>
                <p className={styles.block_63}>
                  <span className={styles.text_4}>Currency and unit</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_64}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe currencies as commonly written in transcription
                    locale.
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    my family bought ten liters of orange juice
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    My family bought 10 L of orange juice.{' '}
                  </span>
                </p>
                <p className={styles.block_65}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If it is clear from context that a number or number sequence
                    refers to currency or{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    time, format it as such.
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    milk is two ninety nine{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>Milk is $2.99. </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_4}>Date and time</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_66}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Use the common form for transcribing dates and times as used
                    in transcription{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>language.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_67}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>to do so.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    a few minutes after three{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    a few minutes after 3:00{' '}
                  </span>
                </p>
                <p className={styles.block_68}>
                  <span className={styles.text_4}>Address</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_69}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Write out the full names of locations, roads, states, etc.
                    Only use abbreviations{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>when explicitly spoken.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    751 Jefferson Street, New York City{' '}
                  </span>
                </p>
                <p className={styles.block_70}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Transcribe entities and locations by using a comma between
                    them "ENTITY,{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>LOCATION"</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    McDonald's, Castro Street{' '}
                  </span>
                </p>
                <p className={styles.block_71}>
                  <span className={styles.text_4}>Web</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_72}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>capitalize them.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    im so hashtag hungry i could eat a whole pizza
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    I'm so #hungry I could eat a whole pizza.{' '}
                  </span>
                </p>
                <p className={styles.block_73}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>says "backslash".</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_74}>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Example Audio: </span>
                  <span className={styles.text_8}>
                    h t t p colon backslash backslash mail dot yahoo dot com{' '}
                  </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Correct: </span>
                  <span className={styles.text_8}>http:\mail.yahoo.com</span>
                </p>
                <p className={styles.block_75}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    these errors. If the speaker doesn't say the "w"s at all, do
                    not add them.
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Example Audio: </span>
                  <span className={styles.text_8}>w w facebook dot com </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>www.facebook.com </span>
                </p>
                <p className={styles.block_76}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>individual letters.</span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Example Audio: </span>
                  <span className={styles.text_11}>
                    w w w dot t a r g e t dot c o m”{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>www.target.com </span>
                </p>
                <p className={styles.block_68}>
                  <span className={styles.text_4}>Abbreviation</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_77}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>
                    Do not abbreviate unless the speaker says an abbreviated
                    form.
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_14}>○ </span>
                  <span className={styles.text_15}>Correct: </span>
                  <span className={styles.text_8}>Warriors versus Lakers </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_12}>● </span>
                  <span className={styles.text_13}>
                    In acronyms, do not use periods between letters.
                  </span>
                  <span className={styles.text_11}> </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_9}>○ </span>
                  <span className={styles.text_10}>Correct: </span>
                  <span className={styles.text_11}>
                    NASA, NASCAR, AAMCO, ZIP code{' '}
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Guiding Principles"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default GuidingPrinciples

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
