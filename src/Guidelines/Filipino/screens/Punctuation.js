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
    'fragment-versus-sentences',
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
            <PageContentHeader currentPage="Longform Filipino" />

            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this
                <span className={styles.text_2}>section.</span>
                <span className={styles.text_3}> </span>
              </p>
              <p className={styles.block_188}></p>
              <div id="fragment-versus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={styles.block_190}>
                  <span className={styles.text_8}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_13}>
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_12}></span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_8}>
                    In general, a complete sentence contains a subject and a
                    verb.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Sa bahay ako magtatrabaho ngayon.{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Includes subject (ako) and verb (magtatrabaho).
                  </span>
                </p>
                <p className={styles.block_194}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : At sabi ko tawagan mo ako.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Includes subject (ko) and verb (tawagan). Sounds like a
                    whole utterance rather than just a
                  </span>
                </p>
                <p className={styles.block_195}>
                  conjunction to a larger sentence.
                </p>
                <p className={styles.block_196}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Masama ang pakiramdam ko.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Includes subject and verb.{' '}
                  </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Gusto ko nang mag-check-out.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_197}>
                  <span className={styles.text_2}>
                    Sometimes a phrase which is not obviously grammatically a
                    sentence should nevertheless be
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    treated as a sentence because of its context, e.g. if it's
                    an answer to a specific question, or if it's
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    an example where dropping the subject sounds completely
                    natural as a complete sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Sino ba ang tinutukoy mo? Iyong kapitbahay natin.
                  </span>
                </p>
                <p className={styles.block_199}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Two speakers. "Iyong kapitbahay natin." is an answer to a
                    specific question.
                  </span>
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: iyong kapitbahay </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : No context to suggest this is a sentence; treat as a
                    fragment.
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Inuman sa bahay bukas?{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Dropping the subject and main verb here sounds natural as
                    a complete sentence. Punctuate as
                  </span>
                </p>
                <p className={styles.block_202}>sentence.</p>
                <p className={styles.block_203}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : mga naliligong tuta sa batya{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Sounds like a web search as opposed to a dropped subject.
                    Treat as fragment.
                  </span>
                </p>
                <p className={styles.block_204}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Makikipagkita sa kapitbahay.{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : The subject pronoun was left out by the speaker, but
                    sounds natural as a complete sentence.
                  </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_2}>
                    Interjections, greetings, and farewells said in isolation
                    should be considered complete
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentences and punctuated as such.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Kamusta. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: greeting </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Sayang. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: interjection </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Magandang Umaga. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: greeting </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Mabuhay. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: interjection </span>
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    <span className={styles.calibre1}>: Wala akong paki. </span>
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Entire phrase is being used as an interjection.
                  </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_2}>
                    Do not capitalize or punctuate phrases that are intended to
                    be used by the speaker as a web
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    search, not as full sentences.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: imahe ng aso </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Imahe ng aso. </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : paano magmasa ng harina{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Paano magmasa ng harina.{' '}
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : mga libro ni Anne Rice{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : mga libro ni anne rice
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_2}>
                    Capitalize sentence fragments that sound like the beginning
                    of a sentence. Add end punctuation
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    to sentence fragments that sound like the end of a sentence.
                    For fragments that do not clearly
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sound like the beginning or end of a sentence, leave out
                    capitalization and punctuation. Note
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that sentence fragments may be a result of cut-off audio
                    samples.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Ano sa tingin mo? Baka naman kasi{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    <span className={styles.calibre2}>
                      : Sentence-initial fragment ends mid-stream.
                    </span>
                  </span>
                </p>
                <p className={styles.block_214}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : mas mahirap. Mas nalito tuloy ako.{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Sentence-final fragment begins mid-stream.
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : medyo mahirap, pero kaya mo yan.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Audio was cut off at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Pupunta ako sa karinderya. Pabili po ng Magkano po ang
                    kanin?
                  </span>
                </p>
                <p className={styles.block_217}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Do not put a period, hyphen, or ellipsis after a fragment
                    even if another sentence follows.
                  </span>
                </p>
                <p className={styles.block_218}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Magkano ang Asaan ang{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Both sound like beginnings of sentences.{' '}
                  </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Asan ang Asan ang dagat?{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Repeated beginning of the sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : paalis na sana ng biglang{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Sounds like the middle of a sentence; beginning and end
                    were cut off.
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : ng dahil doon. Kaya pala umalis siya.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Audio was cut off at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : pagkatapos nakita ko{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Fragment does not sound like the beginning or the end of a
                    sentence, so leave out
                  </span>
                </p>
                <p className={styles.block_221}>punctuation.</p>
                <p className={styles.block_222}>
                  <span className={styles.text_2}>
                    If an utterance is not clearly a sentence according to the
                    above rules and examples, do not
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    capitalize or punctuate it as a sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={styles.block_224}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Naghuhudyat ito ng pagtatapos ng pangungusap na paturol o
                    pautos.
                  </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_23}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_23}>
                    : Naghuhudyat ito, ng pagtatapos ng, pangungusap na paturol
                    o pautos.
                  </span>
                </p>
                <p className={styles.block_227}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Even if the speaker uses long pauses in these places, do
                    not use a comma. There are places where commas are allowed
                    or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_2}>
                    For complete sentences that follow a single word or phrase
                    that focuses the meaning of a
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence, put a comma after the single word or phrase.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Manila Zoo, sarado na ba?{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : "Manila Zoo" is a phrase that focuses the meaning of the
                    sentence.
                  </span>
                </p>
                <p className={styles.block_230}>
                  <span className={styles.text_2}>
                    Put a comma after common sentence openers such as
                    prepositional phrases, adverbials, and
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>introductory clauses.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Ngayong nabanggit mo, kelangan na nating bumili ng
                    supplies.
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Ang nakapagtataka ay, nagkasabay yung dalawang pagdidiwang
                    sa isang araw.
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : introductory clause E
                  </span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>: adverbial </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Sa US, may coffee shop sa bawat kanto.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : prepositional phrase{' '}
                  </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Isang tag-init, sumali ako sa internship sa isang isla sa
                    Bicol, Philippines.
                  </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>: introductory clause </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_2}>
                    Use a comma when a sentence starts with a discourse word,
                    interjection, or yes/no word.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    However: If there is a long pause between a discourse word,
                    interjection, or yes/no word and a
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    full sentence that follows it, treat that initial word as a
                    separate sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Kasi, akala ko may kasama ka.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: discourse word. </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Oo, kaunti lang. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: Yes/no word. </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Yes, I do. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: Yes/no word. </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Sure, I can. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: Yes/no word. </span>
                </p>
                <p className={styles.block_239}>Use commas in lists.</p>
                <p className={styles.block_240}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Hangang-hanga ako sa pagsasama ng napakaraming bansang
                    ito, na kahit sino ka man, maitim o maputi, matangkad o
                    maliit, matanda o bata, babae man o lakaki, naroon ka't
                    pinagsama-sama kayo sa mapayapang dahilan, kung may kaaway
                    ka man diyan, para ipakita ang galing mo.
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Iyong matalino, nakakatawa, cute na baby ay nakapaglalakad
                    na.
                  </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>: list of adjectives E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>: list of adjectives </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_2}>
                    Use commas for non-restrictive modifiers, but do not use
                    commas for restrictive modifiers. The
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    basic test for this is whether the modifier can be dropped
                    from the sentence and still keep
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    basically the same meaning.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_244}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Ang president ng Estados Unidos, si Barack Obama, ay nasa
                    summit.
                  </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Iyong mga taong nagpareserba ang mauunang maserbisyohan
                    bago ang lahat.
                  </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Si President Obama, na nahirang noong 2008, ay inagura
                    noong 2009.
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Iyong presidente na nahirang noong 2008 ay inagura noong
                    2009.
                  </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Non-restrictive modifier. "Barack Obama" does not change
                    the core meaning of "Ang president ng Estados Unidos", it
                    just adds additional information about the US president.
                  </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Restrictive modifier. The relative clause "who made
                    reservations" restricts which people we are talking about,
                    it doesn't just add additional information about an already
                    delineated group of people.
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Non-restrictive modifier. As a rule of thumb, if you ask
                    yourself: "which president of the United States" or "which
                    classmate" and the answer is not absolutely clear, don't use
                    commas.
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Unless there are significant pauses after "presidente" and
                    "2008", you should assume this is a restrictive modifier.
                  </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_13}>
                    Use commas in sign-offs, such as those at the end of a
                    message. Do not use end punctuation.
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Gumagalang, Owen </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Nagmamahal, Ed</span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_2}>
                    Do not use commas in sentences that consist only of a
                    greeting and an addressee. If a greeting
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    occurs at the beginning of a sentence or fragment, place a
                    comma after the greeting. If the
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    greeting includes an addressee, place the comma after the
                    addressee.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_97}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Hi. </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Hi Dajao. </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Hi, si Gloria ito. </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Hi Dan, si Gloria ito.{' '}
                  </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Hi Dan. Si Gloria ito.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Long pause between "Hi Dan." and "Si Gloria." Treat as
                    separate sentences.
                  </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_2}>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated by a
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>comma.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Mary, tawagan mo ako ulit.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Kamusta ka na, Joan?{' '}
                  </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Clara, Susan. Kailangan ko kayong makausap tungkol sa
                    insurance claim.
                  </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Mark, hi, si Jane ito.{' '}
                  </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Jalili, halika! </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Note that this is a difficult edge case: "Clara, Susan."
                    appears to be a shortened version of "Clara, it’s Susan." so
                    we treat it as a full sentence.
                  </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_2}>
                    The phrase "Ok Google" in isolation is transcribed without a
                    comma or end punctuation. When
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the phrase appears before longer utterances, place a comma
                    after "Google".
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Ok Google </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ok Google, larawan ng olive trees{' '}
                  </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ok Google, ipakita mo ang contact info ni
                  </span>
                </p>
                <p className={styles.block_262}>Dean.</p>
                <p className={styles.block_185}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ok Google, kelan ang Araw ng mga Bayani{' '}
                  </span>
                </p>
                <p className={styles.block_182}>ngayong taon?</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ok Google, mga larawan ng pusa{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ok Google, saan ang Manila Hotel?{' '}
                  </span>
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_264}>
                  <span className={styles.text_2}>
                    Capitalize and punctuate the following as questions: 1) All
                    queries syntactically built as
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    questions, regardless of intonation. 2) All queries which
                    sound like they are being used as
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    questions, regardless of sentence structure.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: Seryoso ka? </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Syntactically built as a question, so punctuate as a
                    question regardless of intonation.
                  </span>
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : 3:00 ng madaling araw?{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Rising intonation suggests it is a question, so punctuate
                    as a question regardless of structure.
                  </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : lagay ng panahon sa Mindanao{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Query has rising intonation, but is most likely a web
                    search rather than a true question.
                  </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Sino? </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Intonation suggests it is a question, so punctuate as a
                    question regardless of the structure.
                  </span>
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Anong ibig mong sabihin?{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Syntactically built as a question, so punctuate as a
                    question regardless of intonation.
                  </span>
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_2}>
                    If a speaker uses clearly exclamatory intonation, use an
                    exclamation point. If there is any doubt,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    err on the side of using period.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Ayos! </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Ayos. </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Speaker sounds unenthused.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_273}>
                  <span className={styles.text_2}>
                    Use a comma between reported speech verbs and direct
                    quotations. Do not put punctuation
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    within quotation marks unless the punctuation belongs to the
                    reported speech.
                  </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Sabi ng kaibigan ko, "alligator crocodile".{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sabi ng kaibigan ko, "alligator crocodile." I
                  </span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sabi ng kaibigan ko "alligator crocodile." I
                  </span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sabi ng kaibigan ko "alligator crocodile".
                  </span>
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Bigkasin "onomatopoeia".{' '}
                  </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Bigkasin, "onomatopoeia".{' '}
                  </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Siya sabihin "pusa".{' '}
                  </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Siya sabihin, "pusa."{' '}
                  </span>
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : The word "Sabi" is a common reported speech verb in
                    Tagalog, but other words (hinigi, tanong, sagot, etc.) can
                    be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Omit the comma if the verb is in the imperative.
                  </span>
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_2}>
                    If the text in quotation marks qualifies as a sentence,
                    punctuate as if it were its own utterance.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Do not alter its end punctuation even if the quote is within
                    a sentence. Do not add excess
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation after end quotation marks.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Sabi ni Ann, "Magkita tayo mamaya alas 3:00."
                  </span>
                </p>
                <p className={styles.block_280}>
                  <span className={styles.text_23}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_23}>
                    : Sabi ni Ann, "Magkita tayo mamaya alas 3:00.".
                  </span>
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Nagtanong si Jane, "Magkikita ba tayo mamayang alas 3:00?"
                  </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_23}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_23}>
                    : Nagtanong si Jane, "Magkikita ba tayo mamayang alas
                    3:00?".
                  </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Sabi ba ni Jane, "Magkita tayo doon."{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sabi ba ni Jane, "Magkita tayo doon."?{' '}
                  </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Sabi pa ni Josh, "Pupunta talaga ako. Pangako." kahit na
                    hindi man lang tiningnan ang kalendaryo niya.
                  </span>
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Text in quotation marks qualifies as a sentence. Do not
                    add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Text in quotation marks qualifies as a sentence. Do not
                    add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Text in quotation marks qualifies as a sentence. Do not
                    add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Text in quotation marks qualifies as sentences. Do not
                    alter its end punctuation even though the quote is within a
                    sentence.
                  </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_2}>
                    Do not use quotation marks for indirect quotes. Use context
                    and intonation to determine whether
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a quote is direct or indirect.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Sabi ng mga bata sa akin gutom sila.
                  </span>
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Sabi ni John hindi daw siya makakapunta sa sabado.
                  </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : Intonation implies indirect quote.{' '}
                  </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_2}>
                    Use a colon but no quotation marks in quotative voice
                    actions when the quote follows the
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    command. Use quotation marks when the quote is in the middle
                    of the sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : I-translate sa French: Kamusta ka?{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : The quote follows the command, so use a colon and omit
                    quotation marks.
                  </span>
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : I-translate ang "Anong pangalan mo?" sa French.
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Paano sabihin ang "Mahala kita." sa French?{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Paano sabihin ang, "I love you." in French?
                  </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : To example@gmail.com: Hey, kamusta araw mo?
                  </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Mag-send ng email to example@gmail.com sinasabing: Hey,
                    kamusta araw mo?
                  </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Mag-send ng email kay John: Mahuhuli ako ng dating.
                  </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : I-update ang Google+: Magtatrabaho ako sa bahay.
                  </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : The quote is in the middle of a sentence, so use quotation
                    marks and omit colon.
                  </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Omit commas after "say" verbs in translation requests.
                  </span>
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : The quote follows the command, so use a colon.
                  </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Paano mo sabihin ang "please" sa tagalog.{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : The quote is in the middle of a sentence, so use quotation
                    marks.
                  </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_2}>
                    Leave text after colons lowercase unless capitalization is
                    required (can stand alone as complete
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence).</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Set appointment para bukas ng alas 3:30 ng
                  </span>
                </p>
                <p className={styles.block_182}>hapon: doctor's appointment.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Text Kim: Sa Miyerkules pa daw darating ang
                  </span>
                </p>
                <p className={styles.block_182}>mga karpentero.</p>
                <p className={styles.block_304}>
                  <span className={styles.text_2}>
                    When speakers make a request for single words to be
                    translated into another language, don't
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuate or capitalize the words, even if you'd consider
                    the words as sentences in other
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>situations.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_305}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Isalin ang salitang "hello" sa French.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Do not capitalize "hello" even though it can stand alone
                    as a sentence in other contexts.
                  </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Isalin sa Espanyol: "alis".{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Do not capitalize "leave" even though it can stand alone
                    as a sentence in other contexts.
                  </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_2}>
                    Do not use quotation marks for metalinguistic uses of words
                    or phrases. These uses include
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    defining the word, talking about the spelling of the word,
                    or any other type of reference to the
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>word itself as a thing.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ibigay ang kahulugan ng{' '}
                  </span>
                </p>
                <p className={styles.block_309}>nakakapagpabagabag.</p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Ibigay ang kahulugan ng{' '}
                  </span>
                </p>
                <p className={styles.block_310}>"nakakapagpabagabag".</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Nakakapagpabagabag ay mahirap ibaybay.{' '}
                  </span>
                </p>
                <p className={styles.block_178}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : "Nakakapagpabagabag" ay mahirap{' '}
                  </span>
                </p>
                <p className={styles.block_311}>ibaybay.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Sabi niya lang zucchini.{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Sabi niya lang "zucchini".{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Anna ay pwedeng baybayin ng baliktaran.{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Ibigay ang kahulugan ng{' '}
                  </span>
                </p>
                <p className={styles.block_310}>"nakakapagpabagabag".</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Paano bigkasin ang o n o m a t o p o e i a?
                  </span>
                </p>
                <p className={styles.block_178}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Paano bigkasin ang "o n o m a t o p o e i
                  </span>
                </p>
                <p className={styles.block_312}>a"?</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_314}>
                  <span className={styles.text_2}>
                    Apart from the letters a through z, you should not use any
                    other symbol than: 0-9
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    àáäéèéëêñóôöüûùúÁÁÄÉÈÉËÊĒÑÓÔÖÜÛÙÚ²³,?!~^\'"_°:.()&lt;&gt;{}
                    []√/@#$€£¢+=%*&amp;-.;
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_8}>
                    Transcribe apostrophes as they are normally used.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ito'y bahay ni Mary.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ika'y aking hinahangaan.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ano't ano ba ang mga kinakaliangan para sa
                  </span>
                </p>
                <p className={styles.block_316}>eskewala.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Ako'y nagugutom. </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_8}>
                    When two opposing teams are mentioned, include a hyphen
                    between their names.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Napanood mo ba ang Talk N' Text-Ginebra{' '}
                  </span>
                </p>
                <p className={styles.block_309}>kagabi?</p>
                <p className={styles.block_319}>
                  <span className={styles.text_8}>
                    Include a hyphen between locations in flight itineraries.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Davao-Manila flight </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Davao Manila flight </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_2}>
                    Use hyphen in phrases and compounds typically written with
                    hyphen. If in doubt, use hyphen.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Check your locale's dictionary for hyphenation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Tara manood tayo ng play-by-play na review
                  </span>
                </p>
                <p className={styles.block_309}>noong laro.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: tuldok-kuwit </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_2}>
                    Use a hyphen when a polysyllabic word is repeated to produce
                    a new word or for grammatical
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>effect.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: bahay-bahay </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: basta-basta</span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: dodo </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: do-do </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : Repeated word is only one syllable.{' '}
                  </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_2}>
                    Use a hyphen to separate Filipino prefixes from English
                    words. If the English word's first syllable
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    is repeated, insert the hyphen after the repeated syllable.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: pang-style </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: nag-commute </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: magsa-save </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: mag-sasave </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>
                  <span className={styles.text_}>Spoken punctuation</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_2}>
                    For sentence-level spoken punctuation, write out the full
                    word or words between curly brackets.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Do not add punctuation symbols after spoken punctuation. Be
                    careful with homonyms. (See
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    exceptions in the next rule.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Kamusta ka {`{tandang pananong}`}{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: Kamusta ka? </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Kamusta ka tandang pananong?{' '}
                  </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>
                    kamusta ka tandang pananong{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Okay {`{tuldok} {tuldok} {tuldok}`}{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    okay tuldok tuldok tuldok{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Sumasakit ang ulo ko {`{tudolk}`}{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sumasakit ang ulo ko tudolk. I
                  </span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sumasakit ang ulo ko tudolk I
                  </span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sumasakit ang ulo ko.{' '}
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Bitawan mo ako {`{tandang padamdam}`}{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Bitawan mo ako tandang padamdam! I
                  </span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Bitawan mo ako tandang padamdam I
                  </span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: Bitawan mo ako! </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>
                    sumasakit ang ulo ko tudolk{' '}
                  </span>
                  <span className={styles.text_19}>" E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>
                    bitawan mo ako tandang padamdam{' '}
                  </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: {`{smiley face}`} </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: :-) </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Sabi niya sa akin, {`{quote}`} Huwag mo dalhin ang pusa.
                    {`{end quote}`}
                  </span>
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_23}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_23}>
                    : Sabi niya sa akin "huwag mo dalhin ang pusa."
                  </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>smiley face </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    sabi niya sa akin quote huwag mo dalhin ang pusa end quote{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_2}>
                    Don't spell out internal punctuation like hyphens in web
                    pages, email addresses, addresses,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    phone numbers, or other word-level punctuation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Nakatira ako sa apartment 4-A.{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    nakatira ako sa apartment apat gitling a{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : example_email@yahoo.com{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    example underscore email at yahoo dot com{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Siya ay isang artista/modelo.{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    siya ay isang artista slash modelo{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : word-level punctuation{' '}
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_2}>
                    If a word that can refer to a punctuation mark is spoken in
                    isolation, it should be written out
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>between curly brackets.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: {`{gitling}`} </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: - </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: {`{gatlang} `}</span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: _ </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>gitling </span>
                  <span className={styles.text_19}>" E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>gatlang </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following sentence
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as normal.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : At aalis na ako {`{tuldok}`} Gaano katagal ang biyahe?
                  </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    at aalis na ako tuldok gaano katagal ang biyahe{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_350}></p>
                <p className={styles.block_351}></p>
                <p className={styles.block_352}></p>
              </div>
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
