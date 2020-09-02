import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Malayalam" />
            <div className="content text">
              <p class="block_30">Punctuation</p>
              <p class="block_7">
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <p class="block_28">Fragments versus sentences</p>
              <p class="block_31">
                Add punctuation where needed, but err on the side of keeping it
                minimal.
              </p>
              <p class="block_31">
                Sometimes a phrase which is not obviously grammatically a
                sentence should nevertheless be treated as a sentence because of
                its context, e.g. if it's an answer to a speci c question, or if
                it's an example where dropping the subject sounds completely
                natural as a complete sentence.
              </p>
              <p class="block_23">നീ ആേരാടാണ സംസാരി ു ത? വാതിലിെ സമീപ ു വ ി.</p>
              <p class="block_">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                4/19
              </p>
              <p class="block_23">
                ര ആളുകൾ സംസാരി ു ു. "വാതിലിെ സമീപ ു വ ി." എ ത സവിേശഷമായ ഒരു േചാദ
                ിനു മറുപടിയാണ.
              </p>
              <p class="block_23">വാതിലിെ സമീപ ു വ ി</p>
              <p class="block_23">
                ഇത ഒരു വാക മാെണ ഒരു സ ർഭവും വ മാ ു ി ; ഒരു ഫാഗെമ ആയി പരിഗണി ു ു.
              </p>
              <p class="block_32">
                <span class="text_">േപാകുേ ാ നാളെ പാർ ി ? </span>
                <span class="text_5">
                  <sup class="calibre1">
                    അർഥം നൽകുകയും പധാന കിയ ഇവിെട ഒരു പൂർ
                  </sup>
                </span>
              </p>
              <p class="block_23">വാക െ േ ാെലയുമു . വാക മായി അടയാളെ ടു ുക.</p>
              <p class="block_32">
                <span class="text_">െപ സിെന ട ിൽ കുളി ി ൽമ </span>
                <span class="text_5">
                  <sup class="calibre1">ഒരു അർഥം നൽകു ി , െവബ െസർ േപാെലയു </sup>
                </span>
                <span class="text_">ഫാഗ്െമ ആയി അടയാളെ ടു ുക. </span>
              </p>
              <p class="block_28">
                <sup class="calibre1">. </sup>
              </p>
              <p class="block_33">
                <span class="text_6">
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </span>
                <span class="text_4">
                  <sub class="calibre2">അേ ാ. വ ാേ പകം </sub>
                </span>
              </p>
              <p class="block_23">നമസ്കാരം. അഭിവാദ ം</p>
              <p class="block_31">
                If an utterance is not clearly a sentence according to the above
                rules and examples, do not punctuate it as a sentence.
              </p>
              <p class="block_28">Commas</p>
              <p class="block_31">
                Only use commas where required. Err on the side of minimal
                punctuation. Do not rely on intonation.
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_33">
                <span class="text_2">എവിെടയാണ നി ളുെട വീട? N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: എവിെടയാണ, നി ളുെട, വീട? </span>
              </p>
              <p class="block_31">
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However: If there is a long pause
                between a discourse word, interjection, or yes/no word and a
                full sentence that follows it, treat that initial word as a
                separate sentence.
              </p>
              <p class="block_23">അെത, ഞാൻ വിചാരി ു നിന കൂ ുകാരുെ .</p>
              <p class="block_">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                5/19
              </p>
              <p class="block_23">
                സംഭാഷണ പദം. "പേ ", "കൂടാെത" എ ിവെയാെ മ ഉദാഹരണ ളാണ.
              </p>
              <p class="block_32">
                <span class="text_">ഹഹ, അത കല ി. </span>
                <span class="text_5">
                  <sup class="calibre1">
                    വ ാേ പകം. അേ ാ!, ആഹാ!, ക ം! തുട ിയവ
                  </sup>
                </span>
              </p>
              <p class="block_23">വ ാേ പ ൾ ഉദാഹരണ ളാണ.</p>
              <p class="block_23">ഉ , ഞാൻ വരും. ഉ /ഇ പദം</p>
              <p class="block_23">അെത, അത സംഭവി ും. ഉ /ഇ പദം</p>
              <p class="block_23">
                തീർ യായും. അത സംഭവി ും. "തീർ യായും" എ തിന േശഷം ഒരു ഇടേവള.
              </p>
              <p class="block_23">
                െകാ ാം. അത ന ായി ു . "തീർ യായും" എ തിന േശഷം ഒരു ഇടേവള.
              </p>
              <p class="block_31">
                The phrase "Ok Google" in isolation is transcribed without a
                comma or end punctuation. When the phrase appears before longer
                utterances, place a comma after "Google".
              </p>
              <p class="block_7">Ok Google</p>
              <p class="block_23">Ok Google, ഇ യുെട ചി ത ൾ</p>
              <p class="block_23">Ok Google, ഡീനിെ േകാ ാ വിവര ൾ കാണി ു.</p>
              <p class="block_23">Ok Google, ഈ വർഷെ െമേ ാറിൽ ദിനം എ ാണ?</p>
              <p class="block_28">Intonation marks</p>
              <p class="block_31">
                Punctuate the following as questions: 1) All queries
                syntactically built as questions, regardless of intonation. 2)
                All queries which sound like they are being used as questions,
                regardless of sentence structure.
              </p>
              <p class="block_23">നിന ഉറ ാേണാ?</p>
              <p class="block_23">
                വാക ഘടനാ പകാരം േചാദ മാണ, അതുെകാ സ രേഭദം പരിഗണി ാെത േചാദ മായി തെ
                വിരാമച മിടുക.
              </p>
              <p class="block_23">രാവിെല 3:00 േനാ?</p>
              <p class="block_23">
                ഉയർ സ രേഭദം േചാദ മാണ നിർേ ശി ു ു, അതുെകാ സ രേഭദം പരിഗണി ാെത േചാദ
                മായി തെ വിരാമച മിടുക.
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_34">
                If a speaker uses clearly exclamatory intonation, use an
                exclamation point. If there is any doubt, err on the side of
                using period.
              </p>
              <p class="block_35">അെത! ആേവശേ ാെട സംസാരി ു ു.</p>
              <p class="block_36">അെത. ആേവശമി ാെത സംസാരി ു ു.</p>
              <p class="block_19">Colon and quotation</p>
              <p class="block_17">
                Use a comma between reported speech verbs and direct quotations.
                Do not put punctuation within quotation marks unless the
                punctuation belongs to the reported speech.
              </p>
              <p class="block_18">
                <span class="text_2">അവൻ പറ ത, "മുതല" എ ാണ. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: അവൻ പറ ത "മുതല" എ ാണ. </span>
              </p>
              <p class="block_21">
                <span class="text_2">എ ാവരും പറയുക "േകരളം". N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: എ ാവരും പറയുക, "േകരളം". </span>
              </p>
              <p class="block_16">
                If the text in quotation marks quali es as a sentence, punctuate
                as if it were its own utterance. Do not alter its end
                punctuation even if the quote is within a sentence. Do not add
                excess punctuation after end quotation marks.
              </p>
              <p class="block_20">
                <span class="text_2">അവൾ പറ ു, "ന ു അവിെട ക ുമു ാം." N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: അവൾ പറ ു, "ന ു അവിെട ക ുമു ാം.". </span>
              </p>
              <p class="block_21">
                <span class="text_2">
                  അവൾ േചാദി ു, "ന ൾ മൂ മണി ക ുമു ിേ ?" N
                </span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : അവൾ േചാദി ു, "ന ൾ മൂ മണി ക ുമു ിേ ?".{' '}
                </span>
              </p>
              <p class="block_21">
                <span class="text_2">അവൻ പറേ ാ, "അവിെട വരാൻ." N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: അവൻ പറേ ാ, "അവിെട വരാൻ."? </span>
              </p>
              <p class="block_16">
                Use a colon but no quotation marks in quotative voice actions
                when the quote follows the command. Use quotation marks when the
                quote is in the middle of the sentence.
              </p>
              <p class="block_37">ഇത ഫ ിേല വിവർ നം െച ുക: നിന സുഖമാേണാ?</p>
              <p class="block_23">
                ഉ രവിെന പി ുടരു താണ ഉ രണി, ആയതിനാൽ ഉ രണി ചി ം ഒഴിവാ ി ഭി ിക
                ഉപേയാഗി ുക.
              </p>
              <p class="block_38">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                6/19
              </p>
              <p class="block_39">താ ൾ "നിന സുഖമാേണാ?" എ ത</p>
              <p class="block_40">ഫ ിേല വിവർ നം െച ുക.</p>
              <p class="block_23">
                ഉ രണി വാക ിെ മധ ഭാഗ ാണ, അതുെകാ ഭി ിക ഒഴിവാ ി ഉ രണി ചി ം ഉപേയാഗി
                ുക.
              </p>
              <p class="block_36">ഫ ഭാഷയിൽ "എനി നിെ</p>
              <p class="block_11">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_41">
                <span class="text_2">ഇ മാണ." എ െന പറയും? N</span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : ഫ ഭാഷയിൽ, "എനി നിെ ഇ മാണ." എ െന പറയും?{' '}
                </span>
              </p>
              <p class="block_42">
                example@gmail.com എ തിേല : േഹയ, എ െനയു ായിരു ു?
              </p>
              <p class="block_36">
                example@gmail.com എ തിേല ഇത ഇെമയിൽ അയ ുക: േഹയ, എ െനയു ായിരു ു?
              </p>
              <p class="block_19">Other symbols</p>
              <p class="block_43">
                <span class="text_7">
                  Apart from the English letters a through z and Malayalam
                  letters through{' '}
                </span>
                <span class="text_8">ൿ</span>
                <span class="text_7">
                  , you should not use any other symbol than:
                  0-923äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ,?!~^\'"_°:.()&lt;&gt;
                  {}[]√/₹@#$€£+=%*&amp;-.;
                </span>
              </p>
              <p class="block_44">Spoken punctuation</p>
              <p class="block_17">
                For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms. (See
                exceptions in the next rule.)
              </p>
              <p class="block_18">
                <span class="text_2">ഓെക {`{കു } {കു } {കു }`} N</span>
                <span class="text_3">OT</span>
                <span class="text_2">: ശരി... </span>
              </p>
              <p class="block_21">
                <span class="text_2">
                  ഹായ {`{േകാമാ}`} എ െനയു {} എനി സുഖമാണ {`{കു }`} N
                </span>
                <span class="text_3">OT</span>
                <span class="text_2">: ഹായ, എ െനയു ? എനി സുഖമാണ. </span>
              </p>
              <p class="block_29">
                <span class="text_2">
                  അവൻ എേ ാട പറ ു, {`{തുറ ല ഉ രണി അടയാളം} `}പൂ െയ െകാ ുവരരുത.{' '}
                  {`{അടയ ല ഉ രണി
          അടയാളം} `}
                  N
                </span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : അവൻ എേ ാട പറ ു, "പൂ െയ െകാ ുവരരുത."{' '}
                </span>
              </p>
              <p class="block_16">
                Don't spell out internal punctuation like hyphens in web pages,
                email addresses, addresses, phone numbers, or other word-level
                punctuation.
              </p>
              <p class="block_18">
                <span class="text_2">ഞാൻ താമസി ു ത അ ാർെ മ 10-A യിലാണ. N</span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : ഞാൻ താമസി ു ത അ ാർെ മ 10 {`{തുടർ ുറി}`} A യിലാണ. N
                </span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : ഞാൻ താമസി ു ത അ ാർെ മ പത ത {`{തുടർ ുറി}`} A യിലാണ.
                </span>
              </p>
              <p class="block_21">
                <span class="text_9">www.fake-domain.com N</span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : www {`{േഡാ }`} fake {`{തുടർ ുറി} `}domain {`{േഡാ }`} com
                </span>
              </p>
              <p class="block_36">അവൾ ഒരു അഭിേന തി/േമാഡൽ ആണ.</p>
              <p class="block_45">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                7/19
              </p>
              <p class="block_">3/23/2018 ml-IN_TEST_SET</p>
              <p class="block_41">
                <span class="text_9">N</span>
                <span class="text_3">OT</span>
                <span class="text_2">
                  : അവൾ ഒരു അഭിേന തി {`{ ാഷ}`} േമാഡൽ ആണ.{' '}
                </span>
              </p>
              <p class="block_17">
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.
              </p>
              <p class="block_46">{`{അപൂർ വിരാമം}`}</p>
              <p class="block_36">{`{അടിവര}`}</p>
              <p class="block_47">
                https://speech.google.com/annotation/guidelines/ml_in_test_set/index.html
                8/19
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

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
