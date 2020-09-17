import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import styles from '../css/styles.module.css'
import Wrapper from '../Wrapper'

const GuidingPrinciplesUK_UA = () => {
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
            <PageContentHeader currentPage="Longform Filipino" />
            {/*  */}
            <p className="second-warning">
              **This document is confidential, do not redistribute**
            </p>
            <div className="content text">
              <p className={'large-heading'}>
                Transcription guiding principles
              </p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  This document summarizes the guiding principles for certain
                  types of phrases, that are
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  transcribed in ways that conflict with standard grammar rules
                  for transcription language.
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  For language specific transcription, follow the language
                  specific written domain
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>convention.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="difficult-utterance">
                <p className={'heading'}>Difficult utterances</p>
                <p className={styles.block_3}>
                  <span className={styles.text_2}>
                    Everything relating to problematic utterances (background
                    noise, false starts, etc.) or
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
                  <span className={styles.text_2}>
                    ● If you can't understand part of the audio, transcribe only
                    the part you can understand.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    For the part you cannot understand, create a separate
                    speaker segment and add the
                  </span>
                  <span className={styles.text_3}> Unintelligible label. </span>
                </p>
                <p className={styles.block_6}>
                  <span className={styles.text_2}>
                    ● For utterances that contain speech that is user-generated,
                    pre-recorded, or synthesized,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>transcribe all of it.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_7}>
                  <span className={styles.text_4}>
                    Hesitations and truncations
                  </span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_8}>
                  <span className={styles.text_2}>
                    ● If a very small part of a word (at most one syllable) has
                    been cut off, and you know what
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the word is supposed to be, transcribe the entire word. If
                    you are not sure what the word
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    should be, do not transcribe the word at all. Do not put
                    punctuation after words that
                  </span>
                  <span className={styles.text_3}> have been cut off. </span>
                </p>
                <p className={styles.block_9}>
                  ● If a quotation is cut off in the middle, use an end
                  quotation mark anyway.
                </p>
                <p className={styles.block_10}>
                  <span className={styles.text_2}>
                    ● Transcribe only numbers that you hear even if the speaker
                    didn't finish saying the entire
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>number.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_11}>
                  <span className={styles.text_4}>Accents</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_12}>
                  <span className={styles.text_2}>
                    ● If you hear a word with non-standard pronunciation,
                    transcribe the word using the
                  </span>
                  <span className={styles.text_3}> standard spelling </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>where is dat </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>Where is that?</span>
                  <span className={styles.text_6}> </span>
                </p>
              </div>
              <div id="aggreed-spelling">
                <p className={'heading'}>Agreed spelling</p>
                <p className={styles.block_16}>
                  <span className={styles.text_2}>
                    Spelling conventions for words where several options are
                    thinkable, as well as proper
                  </span>
                  <span className={styles.text_3}> names.</span>
                </p>
                <p className={styles.block_17}>
                  <span className={styles.text_4}>Spelling out</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_18}>
                  <span className={styles.text_2}>
                    ● If a word is spelled out, write it with spaces in between.
                    This rule does not apply to
                  </span>
                  <span className={styles.text_3}>
                    {' '}
                    acronyms, URLs, or email addresses.{' '}
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    how do you get to c o s t c o{' '}
                  </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    How do you get to c o s t c o?
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_19}>
                  <span className={styles.text_4}>Interjections</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_2}>
                    ● Transcribe words representing laughter or other non speech
                    vocalizations. Some of
                  </span>
                  <span className={styles.text_3}> these words might be: </span>
                </p>
                <p className={styles.block_13}>
                  ● huh, woah, okay, yep, uh-huh, mhm, nah
                </p>
                <p className={styles.block_14}>
                  ● This list is not exhaustive of all true interjections.
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_8}>
                    ● Annotate laughter that is included within speech.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_21}>
                  <span className={styles.text_4}>Proper names</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_22}>
                  <span className={styles.text_6}>
                    ● For proper names, always use the official spelling and
                    punctuation. ●{' '}
                  </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>will i am </span>
                </p>
                <p className={styles.block_23}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>will.i.am </span>
                </p>
                <p className={styles.block_24}>
                  <span className={styles.text_2}>
                    ● If a personal name could have multiple spellings and
                    context does not help choose a
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelling, use the spelling that yields the most Google
                    search hits when you search for
                  </span>
                  <span className={styles.text_3}>
                    the name followed by the word "name" (without quotation
                    marks) (e.g. "Anna name").
                  </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>mcdonald </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>MacDonald</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_26}>
                  <span className={styles.text_4}>Brand and product</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_27}>
                  ● Format brand and company names as officially formatted
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    the team is sponsored by united healthcare{' '}
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    The team is sponsored by UnitedHealthcare.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_26}>
                  <span className={styles.text_4}>Media title</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_29}>
                  ● Write media titles as they are most commonly written.
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    screenshots of call of duty black ops two{' '}
                  </span>
                </p>
                <p className={styles.block_30}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    screenshots of Call of Duty: Black Ops 2
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_31}>Multiple spellings</p>
                <p className={styles.block_32}>
                  <span className={styles.text_2}>
                    ● If you hear a word that does not sound like a standard
                    word of your language because
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    there is a small sound change (i.e. accent, speech errors,
                    speech impairment, etc.),
                  </span>
                  <span className={styles.text_3}>
                    {' '}
                    transcribe the intended word.{' '}
                  </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    where is the nearest liberry{' '}
                  </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    Where is the nearest library?{' '}
                  </span>
                </p>
                <p className={styles.block_33}>
                  <span className={styles.text_2}>
                    ● If you hear a word that does not sound like a standard
                    word of your language, but it is
                  </span>
                  <span className={styles.text_3}>
                    obviously based on real words, suffixes, prefixes, infixes
                    or circumfixes, transcribe as is.
                  </span>
                </p>
                <p className={styles.block_34}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>interpretate </span>
                </p>
                <p className={styles.block_35}>
                  <span className={styles.text_2}>
                    ● If you hear a word that does not sound like a standard
                    word of your language because it
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    appears to be nonsense, first search for the word in Google.
                    If there is a clear
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    candidate, transcribe that word. If there is not a clear
                    candidate, but it is easy to spell
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    and articulated clearly, transcribe it anyway. If there is
                    no clear candidate and it is not
                  </span>
                  <span className={styles.text_3}>
                    easy to spell, create a separate speaker segment and add the
                    Unintelligible label.
                  </span>
                </p>
                <p className={styles.block_36}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>Souk Abdali </span>
                </p>
                <p className={styles.block_37}>
                  <span className={styles.text_2}>● </span>
                  <span className={styles.text_10}>Explanation: </span>
                  <span className={styles.text_2}>
                    User says Souk Abdali. Transcriber searches “sukabdali”,
                    finds correct
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    results. Transcribe Souk Abdali.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="punctuation">
                <p className={'heading'}>Punctuation</p>
                <p className={styles.block_39}>
                  <span className={styles.text_2}>
                    Follow the punctuation regulations of your locale.
                    Additional conventions are outlined in
                  </span>
                  <span className={styles.text_3}> this section. </span>
                </p>
                <p className={styles.block_7}>
                  <span className={styles.text_4}>
                    Fragments versus sentences
                  </span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_40}>
                  <span className={styles.text_2}>
                    ● Answers to questions and sentences with dropped subjects
                    should be transcribed with
                  </span>
                  <span className={styles.text_3}> ending punctuation. </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    Who are you talking about? The guy next door.
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Explanation: </span>
                  <span className={styles.text_8}>two speakers</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_41}>
                  <span className={styles.text_4}>Commas</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_42}>
                  <span className={styles.text_8}>
                    ● Only use commas if they are required according to language
                    grammar.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_43}>
                  <span className={styles.text_4}>Colon and quotation</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_44}>
                  <span className={styles.text_6}>
                    ● If a speaker is quoting another person, transcribe a comma
                    before the quoted speech. ●{' '}
                  </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    my friend said alligator crocodile{' '}
                  </span>
                </p>
                <p className={styles.block_23}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    My friend said, "alligator crocodile".
                  </span>
                </p>
                <p className={styles.block_45}>
                  <span className={styles.text_2}>
                    ● If the quoted text is a complete sentence, transcribe
                    ending punctuation inside the
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    quotation marks. In cases like these, do not add an
                    additional ending punctuation after
                  </span>
                  <span className={styles.text_3}> the main sentence. </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    jane asked are we meeting at three o clock{' '}
                  </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    Jane asked, "Are we meeting at 3:00?"{' '}
                  </span>
                </p>
                <p className={styles.block_46}>
                  <span className={styles.text_2}>
                    ● Do not use quotation marks for metalinguistic uses of
                    words or phrases. These uses
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    include defining the word, talking about the spelling of the
                    word, or any other type of
                  </span>
                  <span className={styles.text_3}>
                    {' '}
                    reference to the word itself as a thing.{' '}
                  </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    He just said the word zucchini.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_47}>
                  <span className={styles.text_4}>Other symbols</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_48}>
                  <span className={styles.text_2}>
                    ● Apart from standard letters, you should not use any other
                    symbol than: 0-9
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;
                    {}
                    []√/@#$€£₹+=%*
                  </span>
                  <span className={styles.text_3}> &amp;-.; </span>
                </p>
                <p className={styles.block_49}>
                  <span className={styles.text_6}>
                    ● When two opposing teams are mentioned, include a hyphen
                    between their names. ●{' '}
                  </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    are you going to the saints bears game{' '}
                  </span>
                </p>
                <p className={styles.block_50}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    Are you going to the Saints-Bears game?{' '}
                  </span>
                </p>
                <p className={styles.block_28}>
                  ● Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>rome london flight </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>Rome-London flight</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_47}>
                  <span className={styles.text_4}>Spoken punctuation</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_51}>
                  <span className={styles.text_2}>
                    ● For sentence-level spoken punctuation, write out the full
                    word or words between curly
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    brackets. Do not add punctuation symbols after spoken
                    punctuation. Be careful with
                  </span>
                  <span className={styles.text_3}> homonyms. </span>
                </p>
                <p className={styles.block_25}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>okay dot dot dot </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    Okay {`{dot} {dot} {dot}`}
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
              </div>
              <div id="format">
                <p className={'heading'}>Format</p>
                <p className={styles.block_53}>
                  <span className={styles.text_2}>
                    Transcribe numbers, abbreviations etc. following the
                    formatting conventions in this
                  </span>
                  <span className={styles.text_3}> section. </span>
                </p>
                <p className={styles.block_54}>
                  <span className={styles.text_4}>Number</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_55}>
                  <span className={styles.text_2}>
                    ● Cardinals and ordinals from 0 to 9 are written with
                    letters (except for measures and
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    currency - see Currency and Unit). Use digits for cardinals
                    and ordinals 10 and above,
                  </span>
                </p>
                <p className={styles.block_56}>
                  <span className={styles.text_2}>
                    even if they are coordinated with numbers under 10.
                    Transcribe all decimal numbers as
                  </span>
                  <span className={styles.text_3}> digits. </span>
                </p>
                <p className={styles.block_34}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    I have six dogs and 12 parakeets.{' '}
                  </span>
                </p>
                <p className={styles.block_57}>
                  <span className={styles.text_2}>
                    ● In math expressions or units &amp; measures, transcribe
                    fraction words using numerals and
                  </span>
                  <span className={styles.text_3}>
                    slashes. Be careful not to use pre-combined fractions like
                    "1⁄4".
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    in three fourths of a mile turn right{' '}
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    In 3/4 of a mi, turn right.{' '}
                  </span>
                </p>
                <p className={styles.block_58}>
                  <span className={styles.text_2}>
                    ● For mixed numbers in math expressions and units &amp;
                    measures, transcribe them using
                  </span>
                  <span className={styles.text_3}> numerals. </span>
                </p>
                <p className={styles.block_59}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    the koala weight twelve and a third pounds yesterday ●{' '}
                  </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    The koala weighed 12 and 1/3 lb yesterday.{' '}
                  </span>
                </p>
                <p className={styles.block_60}>
                  <span className={styles.text_2}>
                    ● When referring to items (not units or measures), write
                    fractions out in words. With mixed
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    numbers, write the whole number part out in words if it is
                    under ten, otherwise write it
                  </span>
                  <span className={styles.text_3}> with numerals. </span>
                </p>
                <p className={styles.block_61}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    twelve and a half pumpkin pies were made{' '}
                  </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    12 and a half pumpkin pies were made.{' '}
                  </span>
                </p>
                <p className={styles.block_62}>
                  <span className={styles.text_2}>
                    ● Transcribe percentages using numerals followed by the "%"
                    sign. In the unlikely case
                  </span>
                  <span className={styles.text_3}>
                    that you encounter a number of a million or greater used as
                    a percentage, spell it out.
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>two percent milk </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>2% milk </span>
                </p>
                <p className={styles.block_14}>
                  ● Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>king henry the eighth </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>King Henry VIII </span>
                </p>
                <p className={styles.block_63}>
                  <span className={styles.text_6}>
                    ● Transcribe seasons and episodes of television shows with
                    numerals. ●{' '}
                  </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    season three episode two{' '}
                  </span>
                </p>
                <p className={styles.block_50}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>season 3 episode 2 </span>
                </p>
                <p className={styles.block_64}>
                  <span className={styles.text_2}>
                    ● Transcribe phone numbers using the most common format(s)
                    in the transcription
                  </span>
                  <span className={styles.text_3}> language. </span>
                </p>
                <p className={styles.block_65}>
                  <span className={styles.text_2}>
                    ● Transcribe phone numbers as you would write them down in
                    their natural groups. When
                  </span>
                  <span className={styles.text_3}>
                    applicable, the STD code should be surrounded by spaces.
                  </span>
                </p>
                <p className={styles.block_66}>
                  <span className={styles.text_2}>
                    ● Math expressions should be transcribed with numerals and
                    math symbols with spaces
                  </span>
                  <span className={styles.text_3}> in between them.</span>
                </p>
                <p className={styles.block_67}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    five times six to the third{' '}
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>5 / 6 ^ 3</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_68}>
                  <span className={styles.text_4}>Currency and unit</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_69}>
                  ● Transcribe currencies as commonly written in transcription
                  locale. ● Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_50}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    my family bought ten liters of orange juice
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    My family bought 10 L of orange juice.{' '}
                  </span>
                </p>
                <p className={styles.block_70}>
                  <span className={styles.text_2}>
                    ● If it is clear from context that a number or number
                    sequence refers to currency or time,
                  </span>
                  <span className={styles.text_3}> format it as such. </span>
                </p>
                <p className={styles.block_34}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    milk is two ninety nine{' '}
                  </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>Milk is $2.99.</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_21}>
                  <span className={styles.text_4}>Date and time</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_71}>
                  <span className={styles.text_2}>
                    ● Use the common form for transcribing dates and times as
                    used in transcription
                  </span>
                  <span className={styles.text_3}> language. </span>
                </p>
                <p className={styles.block_72}>
                  <span className={styles.text_6}>
                    ● Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so. ●{' '}
                  </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    a few minutes after three{' '}
                  </span>
                </p>
                <p className={styles.block_73}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    a few minutes after 3:00
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_74}>
                  <span className={styles.text_4}>Address</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_75}>
                  <span className={styles.text_2}>
                    ● Write out the full names of locations, roads, states, etc.
                    Only use abbreviations when
                  </span>
                  <span className={styles.text_3}> explicitly spoken. </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    751 Jefferson Street, New York City{' '}
                  </span>
                </p>
                <p className={styles.block_76}>
                  <span className={styles.text_2}>
                    ● Transcribe entities and locations by using a comma between
                    them "ENTITY,
                  </span>
                  <span className={styles.text_3}> LOCATION" </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    McDonald's, Castro Street
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_77}>
                  <span className={styles.text_4}>Web</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_2}>
                    ● Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't
                  </span>
                  <span className={styles.text_3}> capitalize them. </span>
                </p>
                <p className={styles.block_34}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    im so hashtag hungry i could eat a whole pizza
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>
                    I'm so #hungry I could eat a whole pizza.
                  </span>
                </p>
                <p className={styles.block_79}>
                  <span className={styles.text_2}>
                    ● Do not correct speaker errors such as transcribing a slash
                    when the user actually says
                  </span>
                  <span className={styles.text_3}> "backslash". </span>
                </p>
                <p className={styles.block_80}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    h t t p colon backslash backslash mail dot yahoo dot com ●{' '}
                  </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>http:\mail.yahoo.com </span>
                </p>
                <p className={styles.block_81}>
                  <span className={styles.text_2}>
                    ● If the speaker drops a "w" or dots and it's an obvious
                    URL, you should correct these
                  </span>
                  <span className={styles.text_3}>
                    errors. If the speaker doesn't say the "w"s at all, do not
                    add them.
                  </span>
                </p>
                <p className={styles.block_13}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>w w facebook dot com </span>
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>www.facebook.com </span>
                </p>
                <p className={styles.block_82}>
                  <span className={styles.text_2}>
                    ● If a URL is spelled out in individual letters, transcribe
                    without spaces between individual
                  </span>
                  <span className={styles.text_3}> letters. </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Example Audio: </span>
                  <span className={styles.text_6}>
                    w w w dot t a r g e t dot c o m”{' '}
                  </span>
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>www.target.com</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_74}>
                  <span className={styles.text_4}>Abbreviation</span>
                  <span className={styles.text_5}> </span>
                </p>
                <p className={styles.block_27}>
                  ● Do not abbreviate unless the speaker says an abbreviated
                  form.
                </p>
                <p className={styles.block_14}>
                  <span className={styles.text_6}>● </span>
                  <span className={styles.text_7}>Correct: </span>
                  <span className={styles.text_6}>Warriors versus Lakers </span>
                </p>
                <p className={styles.block_14}>
                  ● In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_28}>
                  <span className={styles.text_8}>● </span>
                  <span className={styles.text_9}>Correct: </span>
                  <span className={styles.text_8}>
                    NASA, NASCAR, AAMCO, ZIP code
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_83}></p>
                <p className={styles.block_83}></p>
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

export default GuidingPrinciplesUK_UA

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
