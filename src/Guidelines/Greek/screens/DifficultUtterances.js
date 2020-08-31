import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Greek" />
            <div className="content">
              <p class="block_2">Difficult utterances</p>
              <p class="block_3">
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <p class="block_4">Skipping a prompt</p>
              <p class="block_5">
                ● If you can't understand part of the audio, transcribe only the
                part you can understand. For the part you cannot understand,
                create a separate speaker segment and add the Unintelligible
                label.
              </p>
              <p class="block_6">
                ● For utterances that contain speech that is user-generated,
                pre-recorded, or synthesized, transcribe all of it.
              </p>
              <p class="block_7">Hesitations and truncations</p>
              <p class="block_8">
                ● If a very small part of a word (at most one syllable) has been
                cut off, and you know what the word is supposed to be,
                transcribe the entire word. If you are not sure what the word
                should be, do not transcribe the word at all. Do not put
                punctuation after words that have been cut off.
              </p>
              <p class="block_9">
                ● If a quotation is cut off in the middle, use an end quotation
                mark anyway.
              </p>
              <p class="block_10">
                ● Transcribe only numbers that you hear even if the speaker
                didn't finish saying the entire number.
              </p>
              <p class="block_11">Accents</p>
              <p class="block_12">
                ● If you hear a word with non-standard pronunciation, transcribe
                the word using the standard spelling
              </p>
              <p class="block_13">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">where is dat </span>
              </p>
              <p class="block_14">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Where is that? </span>
              </p>
              <p class="block_15">Agreed spelling</p>
              <p class="block_16">
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <p class="block_17">Spelling out</p>
              <p class="block_18">
                ● If a word is spelled out, write it with spaces in between.
                This rule does not apply to acronyms, URLs, or email addresses.
              </p>
              <p class="block_19">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">how do you get to c o s t c o </span>
              </p>
              <p class="block_20">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">How do you get to c o s t c o? </span>
              </p>
              <p class="block_21">Interjections</p>
              <p class="block_22">
                ● Transcribe words representing laughter or other non speech
                vocalizations. Some of these words might be:
              </p>
              <p class="block_23">● huh, woah, okay, yep, uh-huh, mhm, nah</p>
              <p class="block_24">
                ● This list is not exhaustive of all true interjections.
              </p>
              <p class="block_25">
                ● Annotate laughter that is included within speech.
              </p>
              <p class="block_26">Proper names</p>
              <p class="block_27">
                ● For proper names, always use the official spelling and
                punctuation.
              </p>
              <p class="block_28">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">will i am </span>
              </p>
              <p class="block_29">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">will.i.am </span>
              </p>
              <p class="block_30">
                ● If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                followed by the word "name" (without quotation marks) (e.g.
                "Anna name").
              </p>
              <p class="block_31">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">mcdonald </span>
              </p>
              <p class="block_32">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">MacDonald </span>
              </p>
              <p class="block_33">Brand and product</p>
              <p class="block_34">
                ● Format brand and company names as officially formatted
              </p>
              <p class="block_35">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  the team is sponsored by united healthcare{' '}
                </span>
              </p>
              <p class="block_36">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  The team is sponsored by UnitedHealthcare.{' '}
                </span>
              </p>
              <p class="block_37">Media title</p>
              <p class="block_38">
                ● Write media titles as they are most commonly written.
              </p>
              <p class="block_39">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  screenshots of call of duty black ops two{' '}
                </span>
              </p>
              <p class="block_40">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  screenshots of Call of Duty: Black Ops 2{' '}
                </span>
              </p>
              <p class="block_41">Multiple spellings</p>
              <p class="block_42">
                ● If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech errors, speech impairment, etc.), transcribe the
                intended word.
              </p>
              <p class="block_43">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">where is the nearest liberry </span>
              </p>
              <p class="block_44">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Where is the nearest library? </span>
              </p>
              <p class="block_45">
                ● If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, prefixes, infixes or circumfixes, transcribe as is.
              </p>
              <p class="block_32">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">interpretate </span>
              </p>
              <p class="block_45">
                ● If you hear a word that does not sound like a standard word of
                your language because it appears to be nonsense, first search
                for the word in Google. If there is a clear candidate,
                transcribe that word. If there is not a clear candidate, but it
                is easy to spell and articulated clearly, transcribe it anyway.
                If there is no clear candidate and it is not easy to spell,
                create a separate speaker segment and add the Unintelligible
                label.
              </p>
              <p class="block_46">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Souk Abdali </span>
              </p>
              <p class="block_47">
                <span class="text_">● </span>
                <span class="text_1">Explanation: </span>
                <span class="text_">
                  User says Souk Abdali. Transcriber searches “sukabdali”, finds
                  correct results. Transcribe Souk Abdali.
                </span>
              </p>
              <p class="block_48">Punctuation</p>
              <p class="block_49">
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <p class="block_50">Fragments versus sentences</p>
              <p class="block_51">
                ● Answers to questions and sentences with dropped subjects
                should be transcribed with ending punctuation.
              </p>
              <p class="block_52">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  Who are you talking about? The guy next door.
                </span>
              </p>
              <p class="block_53">
                <span class="text_">● </span>
                <span class="text_1">Explanation: </span>
                <span class="text_">two speakers </span>
              </p>
              <p class="block_54">Commas</p>
              <p class="block_55">
                ● Only use commas if they are required according to language
                grammar.
              </p>
              <p class="block_56">Colon and quotation</p>
              <p class="block_57">
                ● If a speaker is quoting another person, transcribe a comma
                before the quoted speech.
              </p>
              <p class="block_58">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">my friend said alligator crocodile </span>
              </p>
              <p class="block_59">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  My friend said, "alligator crocodile".{' '}
                </span>
              </p>
              <p class="block_60">
                ● If the quoted text is a complete sentence, transcribe ending
                punctuation inside the quotation marks. In cases like these, do
                not add an additional ending punctuation after the main
                sentence.
              </p>
              <p class="block_61">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  jane asked are we meeting at three o clock{' '}
                </span>
              </p>
              <p class="block_62">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  Jane asked, "Are we meeting at 3:00?"{' '}
                </span>
              </p>
              <p class="block_63">
                ● Do not use quotation marks for metalinguistic uses of words or
                phrases. These uses include defining the word, talking about the
                spelling of the word, or any other type of reference to the word
                itself as a thing.
              </p>
              <p class="block_64">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">He just said the word zucchini. </span>
              </p>
              <p class="block_65">Other symbols</p>
              <p class="block_66">
                ● Apart from standard letters, you should not use any other
                symbol than: 0-9
                äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                []√/@#$€£₹+=%* &amp;-.;
              </p>
              <p class="block_67">
                ● When two opposing teams are mentioned, include a hyphen
                between their names.
              </p>
              <p class="block_52">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">
                  are you going to the saints bears game{' '}
                </span>
              </p>
              <p class="block_68">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">
                  Are you going to the Saints-Bears game?{' '}
                </span>
              </p>
              <p class="block_69">
                ● Include a hyphen between locations in flight itineraries.
              </p>
              <p class="block_70">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">rome london flight </span>
              </p>
              <p class="block_71">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Rome-London flight </span>
              </p>
              <p class="block_72">Spoken punctuation</p>
              <p class="block_73">
                ● For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms.
              </p>
              <p class="block_74">
                <span class="text_">● </span>
                <span class="text_1">Example Audio: </span>
                <span class="text_">okay dot dot dot </span>
              </p>
              <p class="block_75">
                <span class="text_">● </span>
                <span class="text_1">Correct: </span>
                <span class="text_">Okay {`{dot} {dot} {dot}`} </span>
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
