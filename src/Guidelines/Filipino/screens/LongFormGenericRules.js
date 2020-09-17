import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const LongFormGenericRules = () => {
  const classes = useStyles()

  const headingIds = [
    'unintelligible-or-foreign-or-singing',
    'segmentation',
    'speaker-labeling',
    'audio-labels',
    'PII',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Filipino" />
            <div className="content">
              <p className={'large-heading'}>Longform generic rules</p>
              <p className={'text'}>
                Follow the rules in this section to label and transcribe speaker
                segments for longform audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized speech. For speech
                that is unintelligible, foreign, or singing, follow the rules
                below. Only transcribe up to 20 unique speakers. Stop
                transcribing the task once the 21st speaker is heard.
              </p>
              <p className={styles.block_86}></p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing
                </p>
                <p className={styles.block_87}>
                  <span className={styles.text_13}>
                    If you hear speech that is unintelligible or in a foreign
                    language, create a speaker segment that
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_13}>
                    covers only the audio range with that speech. Select either
                    the Unintelligible or Foreign Speech
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_13}>
                    Label and assign to the appropriate speaker.
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_12}></span>
                </p>
                <p className={styles.block_88}>
                  <span className={styles.text_8}>
                    If the entire audio is unintelligible or in a foreign
                    language, create a speaker segment that
                  </span>
                  <span className={styles.text_8}>
                    covers the entire audio range and select either the
                    Unintelligible or Foreign Speech Label.
                  </span>
                </p>
                <p className={styles.block_89}></p>
                <p className={styles.block_90}>
                  <span className={styles.text_2}>
                    If you hear audio that is singing, transcribe the lyrics,
                    assign to the appropriate speaker, and
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    add the Singing label. If the singing is in a foreign
                    language, select the Foreign Speech label.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation</p>
                <p className={styles.block_92}>
                  <span className={styles.text_8}>
                    All speaker segment boundaries should be accurate with at
                    least 100ms precision.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_93}>
                  <span className={styles.text_16}>
                    Speaker turns should not contain pauses in speech that are
                    longer than 0.5 seconds. If a
                  </span>
                  <span className={styles.text_17}> </span>
                  <span className={styles.text_16}>
                    speaker does pause their speech for longer than 0.5 seconds,
                    end the speaker turn before the
                  </span>
                  <span className={styles.text_17}> </span>
                  <span className={styles.text_16}>
                    pause then create a new turn for when the speaker resumes
                    talking.
                  </span>
                  <span className={styles.text_17}> </span>
                  <span className={styles.text_18}></span>
                </p>
                <p className={styles.block_94}>
                  <span className={styles.text_2}>
                    Speaker turns should not be longer than 30 seconds. If a
                    single speaker talks for more than 30
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    consecutive seconds without taking a 0.5 second pause, then
                    end the turn at the 30 second
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    mark and begin a new turn.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="speaker-labeling">
                <p className={'heading'}>
                  <span className={styles.text_}>Speaker labeling</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_96}>
                  <span className={styles.text_2}>
                    All speaker labels should be consistently formatted. Speaker
                    labels should always: be in all
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    lowercase, be spelled correctly, and should not contain
                    underscores or hyphens. Only
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe up to the 20th unique speaker.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_97}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: speaker 1 </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Speaker 1 </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : pre recorded speaker 1{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : pre-recorded speaker_1{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : unidentifiable speaker{' '}
                  </span>
                </p>
                <p className={styles.block_100}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    'speaker #' Used for different speakers in the audio.
                    Includes a number that corresponds to each
                  </span>
                  <span className={styles.text_23}> different speaker.</span>
                </p>
                <p className={styles.block_101}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    'pre recorded speaker #' Used when there is speech coming
                    from a machine. Includes a number
                  </span>
                  <span className={styles.text_23}>
                    that corresponds to each different pre recorded speaker.
                  </span>
                </p>
                <p className={styles.block_102}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    'unidentifiable speaker' Used when you cannot identify who
                    the speaker is. Does not ever
                  </span>
                  <span className={styles.text_23}> include numbers. </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    'speaker Tom' Used when the name of a speaker becomes known.
                    The names of speakers
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    should always be capitalized. You can use first and last
                    names. (Note: adding speaker names
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    will be allowed for some projects but not others. In tool
                    validators will indicate whether or not
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    you can submit a speaker name.)
                  </span>
                  <span className={styles.text_23}> </span>
                </p>
              </div>
              <div id="audio-labels">
                <p className={'heading'}>
                  <span className={styles.text_}>Audio labels</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_105}>
                  <span className={styles.text_2}>
                    For instances with music and lyrics, create separate labels:
                    one for Music and one for Singing.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Transcribe the singing speech and assign to the appropriate
                    speaker.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_106}>
                  <span className={styles.text_2}>
                    Below is a list of labels that may be available for you to
                    choose from. Each contain a description
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    of when is an appropriate time to use it.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>
                    Applause: Use this label if you hear one or more people
                    clapping or cheering.
                  </span>
                </p>
                <p className={styles.block_108}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    DTMF: Stands for 'dual-tone multi-frequency.' This is the
                    sound you hear when a number is
                  </span>
                  <span className={styles.text_23}>
                    pressed during a phone call. For example, 'Press one to
                    speak to a representative' DTMF.
                  </span>
                </p>
                <p className={styles.block_109}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Foreign Speech: Use this label if the speaker is not talking
                    in the target language.{' '}
                  </span>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Laughter: Use this label when you hear laughter.
                  </span>
                </p>
                <p className={styles.block_110}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Music: Use this label when you hear music.
                  </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Noise: Use this label for instances of miscellaneous noise
                    events.
                  </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    PII: Use this label when you hear Personally Identifiable
                    Information (PII). For more information
                  </span>
                  <span className={styles.text_23}>
                    {' '}
                    see the PII section of this guideline.{' '}
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Ring Tone: Use this label when you hear a ring-tone.
                  </span>
                </p>
                <p className={styles.block_114}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Singing: Use this label to indicate that the speaker is
                    singing their speech.{' '}
                  </span>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Unintelligible: Use this label to indicate that you cannot
                    understand what the speaker is saying.{' '}
                  </span>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>
                    Unknown: Use this label for audio events that are not
                    classified to any of the above labels.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
              </div>
              <div id="PII">
                <p className={'heading'}>PII</p>
                <p className={styles.block_116}>
                  <span className={styles.text_2}>
                    PII stands for Personally Identifiable Information. PII is
                    information that is not publicly available,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    but can help you or Google identify an individual person.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_117}>
                  <span className={styles.text_2}>
                    PII should never be transcribed. When PII is heard, create a
                    new speaker segment that
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    captures the audio range of the PII speech. Add the PII
                    label and assign to the appropriate
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speaker. Do not transcribe PII.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_118}>
                  <span className={styles.text_2}>
                    If applicable, select the appropriate PII subcategory which
                    is nested underneath the parent 'PII'
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    label. If the appropriate PII subcategory is not available
                    then select the parent 'PII' label to cover
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    all other cases. If there are no PII subcategories available
                    to choose from then use the 'PII' label
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>for all cases of PII.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_119}>
                  <span className={styles.text_8}>
                    See the below list for all valid PII items
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_120}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>
                    NAME: First and/or Last name{' '}
                  </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>CREDIT_CARD_NUMBER </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>EMAIL </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>PHONE_NUMBER </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    SOCIAL_INSURANCE_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>DRIVER_LICENSE_NUMBER </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    NATIONAL_HEALTH_SERVICE_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    SOCIAL_SECURITY_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>PASSPORT </span>
                </p>
                <p className={styles.block_124}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                    identifier issued by the Australian
                  </span>
                  <span className={styles.text_23}>
                    Taxation Office (ATO) to each taxpaying entity
                  </span>
                </p>
                <p className={styles.block_125}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    LOCATION_STREET: If the street name is heard, mark as PII.
                    Other locations such as State,
                  </span>
                  <span className={styles.text_23}>
                    City, County, zip code are all OK to transcribe.
                  </span>
                </p>
                <p className={styles.block_126}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    LOCATION_STREET_NUMBER: If the street number is heard, mark
                    as PII. Other locations
                  </span>
                  <span className={styles.text_23}>
                    such as State, City, County, zip code are all OK to
                    transcribe.
                  </span>
                </p>
                <p className={styles.block_127}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    MRN (medical record number)
                  </span>
                </p>
                <p className={styles.block_128}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                    Securities Identification
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    Procedures. A CUSIP number identifies most financial
                    instruments, including: stocks of all
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    registered U.S. and Canadian companies, commercial paper,
                    and U.S. government and
                  </span>
                  <span className={styles.text_23}> municipal bonds. </span>
                </p>
                <p className={styles.block_129}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    BC_PHN: Each B.C. resident enrolled with the Medical
                    Services Plan (MSP) is given a unique
                  </span>
                  <span className={styles.text_23}>
                    lifetime identifier for health care called a Personal Health
                    Number (PHN)
                  </span>
                </p>
                <p className={styles.block_127}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    OHIP: Ontario Health Insurance Plan{' '}
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    QUEBEC_HIN: Quebec Health Insurance Number
                  </span>
                </p>
                <p className={styles.block_130}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    CNI NIR: The French national identity card (French: Carte
                    nationale d'identite or CNI) is an
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    official identity document consisting of a laminated plastic
                    card bearing a photograph, name and
                  </span>
                  <span className={styles.text_23}> address. </span>
                </p>
                <p className={styles.block_131}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    IBAN_CODE: The International Bank Account Number (IBAN) is
                    an internationally agreed
                  </span>
                  <span className={styles.text_23}>
                    {' '}
                    system of identifying bank accounts{' '}
                  </span>
                </p>
                <p className={styles.block_132}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    SWIFT_CODE: A SWIFT code is an international bank code that
                    identifies particular banks
                  </span>
                  <span className={styles.text_23}>
                    worldwide. It's also known as a Bank Identifier Code (BIC).
                  </span>
                </p>
                <p className={styles.block_133}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    BANK_ROUTING_MICR: The numbers located on the bottom of a
                    check is called a MICR line.
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    MICR means Magnetic Image Character Recognition. The MICR
                    line is made up of three sets of
                  </span>
                  <span className={styles.text_23}>
                    numbers. The first set is called the ABA Bank Routing Number
                    or routing transit number (RTN)
                  </span>
                </p>
                <p className={styles.block_134}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    DEA_NUMBER: A DEA number (DEA Registration Number) is an
                    identifier assigned to a health
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    care provider (such as a physician, optometrist, dentist, or
                    veterinarian) by the United States
                  </span>
                  <span className={styles.text_23}>
                    {' '}
                    Drug Enforcement Administration{' '}
                  </span>
                </p>
                <p className={styles.block_135}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                    unique 10-digit identification
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    number issued to health care providers in the United States
                    by the Centers for Medicare and
                  </span>
                  <span className={styles.text_23}>
                    {' '}
                    Medicaid Services (CMS).{' '}
                  </span>
                </p>
                <p className={styles.block_127}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>MEDICARE_NUMBER </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    NIE_NUMBER: The NIE is a tax identification number in Spain
                  </span>
                </p>
                <p className={styles.block_136}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or Natural
                    Persons Register) is a
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    number assigned by the Brazilian revenue agency to both
                    Brazilians and resident aliens who
                  </span>
                  <span className={styles.text_23}>
                    {' '}
                    are subject to taxes in Brazil{' '}
                  </span>
                </p>
                <p className={styles.block_137}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                    that acts as an identification
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    for individuals, families and corporates (Indian or
                    Foreign), especially those who pay Income
                  </span>
                  <span className={styles.text_23}> Tax </span>
                </p>
                <p className={styles.block_138}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    BSN_NUMBER: netherlands: The citizen service number (BSN) is
                    a unique personal number
                  </span>
                  <span className={styles.text_23}>
                    allocated to everyone registered in the Personal Records
                    Database (BRP).
                  </span>
                </p>
                <p className={styles.block_139}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    ICD_CODE: International Statistical Classification of
                    Diseases and Related Health Problems
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    (ICD), a medical classification list by the World Health
                    Organization (WHO). It contains codes for
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    diseases, signs and symptoms, abnormal findings, complaints,
                    social circumstances, and
                  </span>
                  <span className={styles.text_23}>
                    {' '}
                    external causes of injury or diseases.{' '}
                  </span>
                </p>
                <p className={styles.block_127}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    FDA_CODE: Prescription drug
                  </span>
                </p>
                <p className={styles.block_140}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>
                    NIF: Tax Identification Number in Spain
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_141}>
                  http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>TAXPAYER_REFERENCE </span>
                </p>
                <p className={styles.block_142}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                    Registro de Poblacion
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    (translated into English as Unique Population Registry Code
                    or else as Personal ID Code
                  </span>
                  <span className={styles.text_23}>
                    Number). It is a unique identity code for both citizens and
                    residents of Mexico.
                  </span>
                </p>
                <p className={styles.block_143}>
                  <span className={styles.text_24}>● </span>
                  <span className={styles.text_22}>
                    RRN: Receiver Registration Number (RNN) is a 10-character
                    alphanumeric can be to a bank
                  </span>
                  <span className={styles.text_23}> </span>
                  <span className={styles.text_22}>
                    account, a credit/debit card, mobile wallet, or home
                    delivery.
                  </span>
                  <span className={styles.text_23}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>
                    Information that does not fit the above PII rules should NOT
                    be considered PII. Some examples
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    of things that are not PII are:
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Commonly known names like Taylor Swift,{' '}
                  </span>
                </p>
                <p className={styles.block_146}>Tom Hanks, Michael Jordan</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Company or Business name, phone number,{' '}
                  </span>
                </p>
                <p className={styles.block_147}>or address.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Pet names </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Social media handles{' '}
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Long Form Generic Rules"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default LongFormGenericRules

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
