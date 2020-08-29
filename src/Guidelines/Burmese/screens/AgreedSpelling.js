import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Burmese" />
            <div className="content text">
              <p class="block_648">Agreed spelling </p>
              <p class="block_649">
                Spelling conventions for words where several options are
                thinkable, as well as proper names.{' '}
              </p>
              <p class="block_650">Spelling out </p>
              <p class="block_651">
                If a word is spelled or obvious pauses are made between letters,
                spell it into letters as it is said (often done for foreign
                names or businesses, for example). Use lowercase letters for the
                spelled-out portion. This rule does not apply to acronyms or
                initialisms, or to spelled-out web or email addresses.{' '}
              </p>
              <p class="block_652">
                <span class="text_18">Correct: </span>
                <span class="text_19">သ ဝထ မရရစ မ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">သ ဝထ မရရစ မ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_319">
                <span class="text_13">Correct: </span>
                <span class="text_14">က က ခ က ဂငယ ဃ က င </span>
                <span class="text_15">
                  Explanation: spelled out the consonants{' '}
                </span>
              </p>
              <p class="block_653">
                <span class="text_18">Correct: CEO </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">စ အ အ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_654">Explanation: Transcribe common acronyms </p>
              <p class="block_655">with Latin letters. </p>
              <p class="block_656">
                <span class="text_4">Correct: VIP </span>
                <span class="text_5">တ </span>
              </p>
              <p class="block_221">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဗ အ င ပ တ </span>
              </p>
              <p class="block_657">
                <span class="text_6">Example audio: " </span>
                <span class="text_27">vip </span>
                <span class="text_7">တ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_658">Explanation: When it is plural, add the </p>
              <p class="block_659">plural-indicator as pronounced. </p>
              <p class="block_660">Interjections </p>
              <p class="block_661">
                Transcribe words representing laughter or other non-speech
                vocalizations with up to three syllables, but no more.{' '}
              </p>
              <p class="block_662">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဟ ဟ ဟ ဟ </span>
              </p>
              <p class="block_663">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဟ ဟ ဟ </span>
              </p>
              <p class="block_664">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဟ ဟ ဟ ဟ ဟ </span>
              </p>
              <p class="block_665">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ဟ ဟ ဟ ဟ ဟ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_666">
                Explanation: Do not transcribe more than three{' '}
              </p>
              <p class="block_223">syllables. </p>
              <p class="block_667">Proper names </p>
              <p class="block_668">
                use official spelling and punctuation for proper names. Google
                them and pay attention to the correct format. Official format
                and spelling of a proper name may supersede the usual written
                transcription conventions detailed in this document.{' '}
              </p>
              <p class="block_669">
                If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                followed by the word "name" (without quotation marks) (e.g.
                "Anna name").{' '}
              </p>
              <p class="block_670">
                <span class="text_4">Correct: </span>
                <span class="text_5">သ န လ င </span>
              </p>
              <p class="block_671">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ ဏ လ င </span>
              </p>
              <p class="block_672">
                <span class="text_4">Explanation: Although "</span>
                <span class="text_5">သ န </span>
                <span class="text_4">", "</span>
                <span class="text_5">သ ဏ </span>
                <span class="text_4">" and "</span>
                <span class="text_5">သ မ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_673">
                <span class="text_4">have the same pronunciation, "</span>
                <span class="text_5">သ န </span>
                <span class="text_4">" is the most </span>
              </p>
              <p class="block_674">common spelling. </p>
              <p class="block_675">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဦ က က လ </span>
              </p>
              <p class="block_664">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဦ က က လ </span>
              </p>
              <p class="block_676">
                <span class="text_4">Explanation: "</span>
                <span class="text_5">ဦ က က လ </span>
                <span class="text_4">" is the most common </span>
              </p>
              <p class="block_677">spelling. </p>
              <p class="block_678">
                <span class="text_4">Correct: </span>
                <span class="text_5">အဘအမည ဦ မင ဆ </span>
                <span class="text_4">(</span>
                <span class="text_5">ခ</span>
                <span class="text_4">) </span>
                <span class="text_5">ဦ သ က </span>
              </p>
              <p class="block_679">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">အဘအမည ဦ မင ဆ </span>
                <span class="text_4">( </span>
                <span class="text_5">ခ </span>
                <span class="text_4">) </span>
                <span class="text_5">ဦ သ က </span>
              </p>
              <p class="block_680">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">အဘအမည ဦ မင ဆ ခ ဦ သ က </span>
              </p>
              <p class="block_681">" </p>
              <p class="block_682">
                <span class="text_28">Correct: Sophia MacDonald </span>
                <span class="text_29">
                  Explanation: Search full names to see if they{' '}
                </span>
              </p>
              <p class="block_683">
                refer to a celebrity. If the full name does not{' '}
              </p>
              <p class="block_684">
                belong to a celebrity, use the most common{' '}
              </p>
              <p class="block_685">
                spelling for each part of the name (e.g. search{' '}
              </p>
              <p class="block_686">"Sophia name" and "MacDonald name"). </p>
              <p class="block_687">
                Please follow the standard spelling when you transliterate
                toBurmese. For names constituted of a first name and last name,
                there shouldn't be a space between the first name and the
                surname. Look them up to check their standard spelling.{' '}
              </p>
              <p class="block_688">
                <span class="text_13">Correct: </span>
                <span class="text_14">အဒ လ </span>
                <span class="text_15">
                  Explanation: If the name is only one word (in{' '}
                </span>
              </p>
              <p class="block_370">
                this example: Adele), transliterate to Burmese.{' '}
              </p>
              <p class="block_689">Please follow the standard spelling. </p>
              <p class="block_690">
                <span class="text_4">Correct: </span>
                <span class="text_5">အ န ဂ လ န ဂ လ </span>
              </p>
              <p class="block_691">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">အ န ဂ လ န ဂ လ </span>
              </p>
              <p class="block_692">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">အ န ဂ လ န ဂ လ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_693">
                Explanation: Some names constituted of a first{' '}
              </p>
              <p class="block_637">
                name and last name are fully transliterated. In{' '}
              </p>
              <p class="block_694">
                that case, there shouldn't be a space between{' '}
              </p>
              <p class="block_381">
                the first name and the surname. Look them up{' '}
              </p>
              <p class="block_695">to check their standard spelling. </p>
              <p class="block_696">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဂ က က ခ န </span>
              </p>
              <p class="block_697">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ဂ က က ခ န </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_698">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဂ က က ခ န </span>
              </p>
              <p class="block_699">
                Explanation: Some names constituted of a first{' '}
              </p>
              <p class="block_637">
                name and last name are fully transliterated. In{' '}
              </p>
              <p class="block_700">
                that case, there shouldn't be a space between{' '}
              </p>
              <p class="block_701">
                the first name and the surname. Look them up{' '}
              </p>
              <p class="block_702">to check their standard spelling. </p>
              <p class="block_703">
                <span class="text_13">Correct: </span>
                <span class="text_14">က င ဝ </span>
                <span class="text_15">
                  Explanation: Some names constituted of a first{' '}
                </span>
              </p>
              <p class="block_704">
                name and last name are fully transliterated. In{' '}
              </p>
              <p class="block_705">
                that case, there shouldn't be a space between{' '}
              </p>
              <p class="block_706">
                the first name and the surname. Look them up{' '}
              </p>
              <p class="block_702">to check their standard spelling. </p>
              <p class="block_703">
                <span class="text_13">Correct: </span>
                <span class="text_14">လ မင ဟ </span>
                <span class="text_15">
                  Explanation: Some names constituted of a first{' '}
                </span>
              </p>
              <p class="block_704">
                name and last name are fully transliterated. In{' '}
              </p>
              <p class="block_705">
                that case, there shouldn't be a space between{' '}
              </p>
              <p class="block_706">
                the first name and the surname. Look them up{' '}
              </p>
              <p class="block_702">to check their standard spelling. </p>
              <p class="block_707">
                If a speaker makes a small mistake in a proper name, transcribe
                it anyway as long as the difference is minimal. "Minimal
                differences" refers to adding or dropping articles, possessives,
                and plurals.{' '}
              </p>
              <p class="block_708">
                <span class="text_4">Correct: </span>
                <span class="text_5">ည မ လ က အခ စ က က က ယ တယ တ လ </span>
              </p>
              <p class="block_709">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ည မ လ က အခ စ က က က ယ သတ လ </span>
              </p>
              <p class="block_710">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ည မ လ က အခ စ က က က ယ တယ တ လ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_682">
                <span class="text_28">Correct: The Lord of the Ring </span>
                <span class="text_29">
                  Explanation: Actual name is "The Lord of the{' '}
                </span>
              </p>
              <p class="block_711">Rings". </p>
              <p class="block_712">
                <span class="text_4">Correct: </span>
                <span class="text_5">သမ န အ မမ </span>
              </p>
              <p class="block_713">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သမ င အ မမ </span>
              </p>
              <p class="block_714">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">သမ န အ မမ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_715">Brand and product </p>
              <p class="block_716">
                Format proper names as they are most commonly formatted on the
                entity's website (especially official documents), if available,
                or the Wikipedia or IMDb page. In cases of ambiguity, defer to
                their privacy policy. If no other sources, use top Google hits.{' '}
              </p>
              <p class="block_717">
                <span class="text_4">Correct: </span>
                <span class="text_5">အလ ပ က ပတ မ အက ဖမ မ ပ ။ </span>
              </p>
              <p class="block_718">
                <span class="text_4">Correct: </span>
                <span class="text_5">က လ တ က </span>
                <span class="text_4">Xbox </span>
                <span class="text_5">လ ခ င ၊ </span>
                <span class="text_4">Wii </span>
                <span class="text_5">လ ခ င တယ ။ </span>
              </p>
              <p class="block_719">
                <span class="text_4">Correct: </span>
                <span class="text_5">ယ က </span>
              </p>
              <p class="block_720">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဂ သ န </span>
              </p>
              <p class="block_721">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ခ သ န </span>
              </p>
              <p class="block_722">
                <span class="text_13">Correct: </span>
                <span class="text_14">မထသ </span>
                <span class="text_15">Explanation: Officially "</span>
                <span class="text_16">မထသ</span>
                <span class="text_15">" and is based on </span>
              </p>
              <p class="block_723">an acronym. </p>
              <p class="block_724">
                <span class="text_13">Correct: </span>
                <span class="text_14">အ င တ ရပ က က </span>
                <span class="text_15">
                  Explanation: Comes from english acronym "IT"{' '}
                </span>
              </p>
              <p class="block_725">
                <span class="text_4">followed by "</span>
                <span class="text_5">ရပ က က </span>
                <span class="text_4">". Usually, English acronyms </span>
              </p>
              <p class="block_726">are transliterated according to Burmese </p>
              <p class="block_727">pronunciation. The whole product name is </p>
              <p class="block_728">
                <span class="text_4">"</span>
                <span class="text_5">အ င တ ရပ က က </span>
                <span class="text_4">". </span>
              </p>
              <p class="block_729">Correct: LEGO </p>
              <p class="block_730">Incorrect: Lego </p>
              <p class="block_731">Correct: KFC </p>
              <p class="block_732">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ကအက ဖ စ </span>
              </p>
              <p class="block_733">
                Explanation: Do not transliterate well known{' '}
              </p>
              <p class="block_734">names based on acronyms like KFC, DHL, </p>
              <p class="block_735">ACCA. Look them up to check whether they </p>
              <p class="block_736">should be transliterated or not. </p>
              <p class="block_737">
                <span class="text_4">Correct: United Vision </span>
                <span class="text_5">မ က မ န ဆ င </span>
              </p>
              <p class="block_738">
                The phrase "Ok Google", as well as possible derivatives such as
                "Ok Google Now" and "Ok Glass", require their own particular
                spelling of "okay". This spelling is unique to these cases.{' '}
              </p>
              <p class="block_739">Correct: Ok Google </p>
              <p class="block_740">
                <span class="text_4">Correct: Ok Google </span>
                <span class="text_5">ဖ င ပ </span>
              </p>
              <p class="block_741">
                <span class="text_4">Correct: Ok Google, </span>
                <span class="text_5">ရ၊ က ဖ ဆ င ဘယ န မ လ ။ </span>
              </p>
              <p class="block_742">
                <span class="text_4">Correct: Ok Google, </span>
                <span class="text_5">အ ခ က ကင </span>
              </p>
              <p class="block_743">
                <span class="text_4">Correct: </span>
                <span class="text_5">အ က </span>
              </p>
              <p class="block_744">
                <span class="text_4">Correct: </span>
                <span class="text_5">အ က၊ ဆက လ ပ ။ </span>
              </p>
              <p class="block_745">
                <span class="text_4">Correct: </span>
                <span class="text_5">အ က၊ န လည ပ ။ ဆက လ ပ ကစ ။ </span>
              </p>
              <p class="block_746">Media title </p>
              <p class="block_747">
                Refer to the Google Play Store for official spellings of media
                titles. For film/television, IMDb is also available. If an
                utterance is ambiguous between a media title and a sentence or
                web search, use your judgment for which is more likely; if truly
                unclear, default to media title.{' '}
              </p>
              <p class="block_748">
                Do not use quotation marks for media titles.{' '}
              </p>
              <p class="block_749">
                <span class="text_4">Correct: </span>
                <span class="text_5">သ န ဖ မင ရ အ ရ က နဝန ထ က သည ပမ </span>
              </p>
              <p class="block_750">စ အ ပ </p>
              <p class="block_751">
                <span class="text_4">Correct: </span>
                <span class="text_5">က န ရ က က ခ စ သ ခ င ဖ င ပ ။ </span>
              </p>
              <p class="block_752">
                <span class="text_4">Correct: </span>
                <span class="text_5">ပ လက ရင ခ င ကည မယ ။ </span>
              </p>
              <p class="block_753">
                Sometimes, media titles can include numbers or digits. Please
                transcribe as full words.{' '}
              </p>
              <p class="block_754">
                <span class="text_4">Correct: </span>
                <span class="text_5">သ တ ခ နစ တန </span>
              </p>
              <p class="block_755">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ တ ၇ တန </span>
              </p>
              <p class="block_756">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">သ တ ခ နစ တန </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_757">
                Explanation: For media titles, the whole title{' '}
              </p>
              <p class="block_758">should be transcribed including numbers. </p>
              <p class="block_759">
                <span class="text_4">Correct: </span>
                <span class="text_5">ခ က ဒသမ သ ညတစ စ အ ပ </span>
              </p>
              <p class="block_760">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">၆</span>
                <span class="text_4">.</span>
                <span class="text_5">၀၁ စ အ ပ </span>
              </p>
              <p class="block_761">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ခ က ဒသမ သ ညတစ စ အ ပ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_757">
                Explanation: For media titles, the whole title{' '}
              </p>
              <p class="block_758">should be transcribed including numbers. </p>
              <p class="block_762">Multiple spellings </p>
              <p class="block_763">
                When multiple spellings are attested, use the first spelling
                used in the reference dictionary for your language. If there is
                no entry, Google the word and use the form with the most hits.{' '}
              </p>
              <p class="block_764">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဖည ဖည </span>
              </p>
              <p class="block_765">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဖ ဖ </span>
              </p>
              <p class="block_766">
                <span class="text_4">Explanation: " </span>
                <span class="text_5">ဖည ဖည </span>
                <span class="text_4">" is preferred by </span>
              </p>
              <p class="block_767">Myanmar Language Commission (MLC) </p>
              <p class="block_768">Dictionary. </p>
              <p class="block_769">
                <span class="text_18">Correct: </span>
                <span class="text_19">သ ခည ဥ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">သ ဂ ဥ </span>
                <span class="text_30">or </span>
                <span class="text_20">သ ဂ ဥ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_770">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ ခ ည ဥ </span>
                <span class="text_4">or </span>
                <span class="text_5">သ ခဥ </span>
                <span class="text_4">
                  Explanation: Although it is spoken as "{' '}
                </span>
                <span class="text_5">သ ဂ ဥ</span>
                <span class="text_4">" </span>
              </p>
              <p class="block_771">
                <span class="text_4">or " </span>
                <span class="text_5">သ ဂ ဥ</span>
                <span class="text_4">", please use the standard spelling </span>
              </p>
              <p class="block_772">
                <span class="text_4">" </span>
                <span class="text_5">သ ခည ဥ</span>
                <span class="text_4">" by MLC Dictionary. </span>
              </p>
              <p class="block_773">
                <span class="text_4">Correct: </span>
                <span class="text_5">မင အ </span>
              </p>
              <p class="block_774">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မ င အ </span>
              </p>
              <p class="block_775">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">မ င အ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_776">
                Explanation: Certain words are pronounced{' '}
              </p>
              <p class="block_777">
                differently than their spelling, such as the words{' '}
              </p>
              <p class="block_778">
                <span class="text_4">" </span>
                <span class="text_5">မတ </span>
                <span class="text_4">", "</span>
                <span class="text_5">မင အ </span>
                <span class="text_4">". Please use the standard </span>
              </p>
              <p class="block_779">spelling by MLC Dictionary. </p>
              <p class="block_780">
                Transcribe slang and colloquialisms as spoken according to the
                appendix on this page. Do not alter non-standard speech that the
                speaker probably wouldn't want corrected.{' '}
              </p>
              <p class="block_781">
                <span class="text_4">Correct: </span>
                <span class="text_5">မသ ဘ </span>
              </p>
              <p class="block_782">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မသ ဘ </span>
              </p>
              <p class="block_783">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">မသ ဘ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_784">
                <span class="text_4">Correct: </span>
                <span class="text_5">ခဏ လ က </span>
              </p>
              <p class="block_785">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ခဏ လ က က </span>
              </p>
              <p class="block_786">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ခဏ လ က </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_787">
                <span class="text_4">Correct: </span>
                <span class="text_5">က ဖ သ က ဦ မယ </span>
              </p>
              <p class="block_788">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">က ဖ သ က ဦ မယ </span>
              </p>
              <p class="block_789">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">က ဖ သ က ဦ မယ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_790">
                Write commonly accepted contractions as usual. Transcribe
                contractions when you hear them spoken.{' '}
              </p>
              <p class="block_791">
                <span class="text_4">Correct: </span>
                <span class="text_5">ပန လ မယ မ တ လ </span>
              </p>
              <p class="block_788">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ပန လ မယ မဟ တ လ </span>
              </p>
              <p class="block_792">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ပန လ မယ မ တ လ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_793">
                <span class="text_4">Explanation: The speaker said "</span>
                <span class="text_5">မ တ လ </span>
                <span class="text_4">" which </span>
              </p>
              <p class="block_794">
                <span class="text_4">actually means "</span>
                <span class="text_5">မဟ တ လ </span>
                <span class="text_4">", please write the </span>
              </p>
              <p class="block_795">utterance as pronounced. </p>
              <p class="block_796">
                <span class="text_17">Example </span>
                <span class="text_13">Correct: </span>
                <span class="text_14">ဟတ က လ </span>
              </p>
              <p class="block_797">
                <span class="text_6">audio: " </span>
                <span class="text_7">ဟတ က လ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_671">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဟ တ က လ </span>
              </p>
              <p class="block_798">
                <span class="text_4">Explanation: The speaker said "</span>
                <span class="text_5">ဟတ က လ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_799">
                <span class="text_4">which actually means "</span>
                <span class="text_5">ဟ တ က လ </span>
                <span class="text_4">", please write </span>
              </p>
              <p class="block_800">the utterance as pronounced. </p>
              <p class="block_801">
                <span class="text_4">
                  Use standard spelling for reductions that commonly occur in
                  normal running speech, like "
                </span>
                <span class="text_5">သ တ မလ </span>
                <span class="text_4">" and "</span>
                <span class="text_5">စ မလ </span>
                <span class="text_4">", for "</span>
                <span class="text_5">သ တ မ </span>
                <span class="text_4">" and "</span>
                <span class="text_5">စ မ </span>
                <span class="text_4">" respectively. </span>
              </p>
              <p class="block_802">
                <span class="text_18">Correct: </span>
                <span class="text_19">ဘယ သ တ န </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">ဘသ တ န </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_803">
                <span class="text_18">Correct: </span>
                <span class="text_19">သ မ ပ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">သ မ ဘ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_804">
                <span class="text_18">Correct: </span>
                <span class="text_19">ဟ တ ရ လ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">ဟ တ က လ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_805">
                <span class="text_18">Correct: </span>
                <span class="text_19">သ ရ သ လ </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_20">သ က သ လ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_806">
                If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, or prefixes, transcribe as is.{' '}
              </p>
              <p class="block_807">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဥ ရ ဩ </span>
                <span class="text_15">Explanation: Speaker meant "</span>
                <span class="text_16">ဥဩ</span>
                <span class="text_15">" but added </span>
              </p>
              <p class="block_808">
                <span class="text_4">one extra middle-infix " </span>
                <span class="text_5">ရ </span>
                <span class="text_4">". </span>
              </p>
              <p class="block_724">
                <span class="text_13">Correct: </span>
                <span class="text_14">ပ ဈ က ရခ ရမ န က င တယ </span>
                <span class="text_15">
                  Explanation: Unsure whether speaker intended{' '}
                </span>
              </p>
              <p class="block_809">
                <span class="text_4">to say " </span>
                <span class="text_5">ရခ မ န </span>
                <span class="text_4">" or " </span>
                <span class="text_5">ရမ န </span>
                <span class="text_4">", but clearly articulated </span>
              </p>
              <p class="block_655">and easy to spell. </p>
              <p class="block_810">
                <span class="text_11">
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </span>
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
