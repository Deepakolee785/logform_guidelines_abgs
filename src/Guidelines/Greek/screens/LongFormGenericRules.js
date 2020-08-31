import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'
import CorrrectIncorrect from '../../../Components/common/CorrrectIncorrect'

const LongFormGenericRules = () => {
  const classes = useStyles()

  const headingIds = [
    'unintelligible-or-foreign-or-singing',
    'segmentation',
    'speaker-labeling',
    'audio-labels',
    'pii',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Greek" />
            <div className="content text">
              <p class="block_132">Longform generic rules </p>
              <p class="block_133">
                Follow the rules in this section to label and transcribe speaker
                segments for longform audio. Transcribe ALL speech that is
                heard, including pre recorded and synthesized speech. For speech
                that is unintelligible, foreign, or singing, follow the rules
                below. Only transcribe up to 20 unique speakers. Stop
                transcribing the task once the 21st speaker is heard.{' '}
              </p>
              <p class="block_134">Unintelligible or foreign or singing </p>
              <p class="block_135">
                If you hear speech that is unintelligible or in a foreign
                language, create a speaker segment that covers only the audio
                range with that speech. Select either the Unintelligible or
                Foreign Speech Label and assign to the appropriate speaker.{' '}
              </p>
              <p class="block_136">
                If the entire audio is unintelligible or in a foreign language,
                create a speaker segment that covers the entire audio range and
                select either the Unintelligible or Foreign Speech Label.{' '}
              </p>
              <p class="block_137">
                If you hear audio that is singing, transcribe the lyrics, assign
                to the appropriate speaker, and add the Singing label. If the
                singing is in a foreign language, select the Foreign Speech
                label.{' '}
              </p>
              <p class="block_138">Segmentation </p>
              <p class="block_139">
                All speaker segment boundaries should be accurate with at least
                100ms precision.{' '}
              </p>
              <p class="block_140">
                Speaker turns should not contain pauses in speech that are
                longer than 0.5 seconds. If a speaker does pause their speech
                for longer than 0.5 seconds, end the speaker turn before the
                pause then create a new turn for when the speaker resumes
                talking.{' '}
              </p>
              <p class="block_141">
                Speaker turns should not be longer than 30 seconds. If a single
                speaker talks for more than 30 consecutive seconds without
                taking a 0.5 second pause, then end the turn at the 30 second
                mark and begin a new turn.{' '}
              </p>
              <p class="block_142">Speaker labeling </p>
              <p class="block_143">
                All speaker labels should be consistently formatted. Speaker
                labels should always: be in all lowercase, be spelled correctly,
                and should not contain underscores or hyphens. Only transcribe
                up to the 20th unique speaker.{' '}
              </p>
              <p class="block_144">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: speaker 1 </span>
              </p>
              <p class="block_145">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: Speaker 1 </span>
              </p>
              <p class="block_146">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: pre recorded speaker 1 </span>
              </p>
              <p class="block_147">
                <span class="text_2">I</span>
                <span class="text_3">NCORRECT</span>
                <span class="text_2">: pre-recorded speaker_1 </span>
              </p>
              <p class="block_148">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: unidentifiable speaker </span>
              </p>
              <p class="block_149">
                <span class="text_4">● </span>
                <span class="text_5">
                  'speaker #' Used for different speakers in the audio. Includes
                  a number that corresponds to each different speaker.{' '}
                </span>
              </p>
              <p class="block_150">
                <span class="text_4">● </span>
                <span class="text_5">
                  'pre recorded speaker #' Used when there is speech coming from
                  a machine. Includes a number that corresponds to each
                  different pre recorded speaker.{' '}
                </span>
              </p>
              <p class="block_151">
                <span class="text_4">● </span>
                <span class="text_5">
                  'unidentifiable speaker' Used when you cannot identify who the
                  speaker is. Does not ever include numbers.{' '}
                </span>
              </p>
              <p class="block_152">
                <span class="text_4">● </span>
                <span class="text_5">
                  'speaker Tom' Used when the name of a speaker becomes known.
                  The names of speakers should always be capitalized. You can
                  use first and last names. (Note: adding speaker names will be
                  allowed for some projects but not others. In tool validators
                  will indicate whether or not you can submit a speaker name.){' '}
                </span>
              </p>
              <p class="block_153">Audio labels </p>
              <p class="block_154">
                For instances with music and lyrics, create separate labels: one
                for Music and one for Singing. Transcribe the singing speech and
                assign to the appropriate speaker.{' '}
              </p>
              <p class="block_155">
                Below is a list of labels that may be available for you to
                choose from. Each contain a description of when is an
                appropriate time to use it.{' '}
              </p>
              <p class="block_156">
                <span class="text_4">● </span>
                <span class="text_5">
                  Applause: Use this label if you hear one or more people
                  clapping or cheering.{' '}
                </span>
              </p>
              <p class="block_157">
                <span class="text_4">● </span>
                <span class="text_5">
                  DTMF: Stands for 'dual-tone multi-frequency.' This is the
                  sound you hear when a number is pressed during a phone call.
                  For example, 'Press one to speak to a representative' DTMF.{' '}
                </span>
              </p>
              <p class="block_158">
                <span class="text_4">● </span>
                <span class="text_5">
                  Foreign Speech: Use this label if the speaker is not talking
                  in the target language.{' '}
                </span>
              </p>
              <p class="block_159">
                <span class="text_4">● </span>
                <span class="text_5">
                  Laughter: Use this label when you hear laughter.{' '}
                </span>
              </p>
              <p class="block_160">
                <span class="text_4">● </span>
                <span class="text_5">
                  Music: Use this label when you hear music.{' '}
                </span>
              </p>
              <p class="block_161">
                <span class="text_4">● </span>
                <span class="text_5">
                  Noise: Use this label for instances of miscellaneous noise
                  events.{' '}
                </span>
              </p>
              <p class="block_162">
                <span class="text_4">● </span>
                <span class="text_5">
                  PII: Use this label when you hear Personally Identifiable
                  Information (PII). For more information see the PII section of
                  this guideline.{' '}
                </span>
              </p>
              <p class="block_163">
                <span class="text_4">● </span>
                <span class="text_5">
                  Ring Tone: Use this label when you hear a ring-tone.{' '}
                </span>
              </p>
              <p class="block_164">
                <span class="text_4">● </span>
                <span class="text_5">
                  Singing: Use this label to indicate that the speaker is
                  singing their speech.{' '}
                </span>
              </p>
              <p class="block_165">
                <span class="text_4">● </span>
                <span class="text_5">
                  Unintelligible: Use this label to indicate that you cannot
                  understand what the speaker is saying.{' '}
                </span>
              </p>
              <p class="block_166">
                <span class="text_4">● </span>
                <span class="text_5">
                  Unknown: Use this label for audio events that are not
                  classified to any of the above labels.{' '}
                </span>
              </p>
              <p class="block_167">Pii </p>
              <p class="block_168">
                PII stands for Personally Identifiable Information. PII is
                information that is not publicly available, but can help you or
                Google identify an individual person.{' '}
              </p>
              <p class="block_169">
                PII should never be transcribed. When PII is heard, create a new
                speaker segment that captures the audio range of the PII speech.
                Add the PII label and assign to the appropriate speaker. Do not
                transcribe PII.{' '}
              </p>
              <p class="block_170">
                See the below list for all valid PII items{' '}
              </p>
              <p class="block_171">
                <span class="text_4">● </span>
                <span class="text_5">NAME: First and/or Last name </span>
              </p>
              <p class="block_172">
                <span class="text_4">● </span>
                <span class="text_5">CREDIT_CARD_NUMBER </span>
              </p>
              <p class="block_173">
                <span class="text_4">● </span>
                <span class="text_5">EMAIL </span>
              </p>
              <p class="block_174">
                <span class="text_4">● </span>
                <span class="text_5">PHONE_NUMBER </span>
              </p>
              <p class="block_175">
                <span class="text_4">● </span>
                <span class="text_5">SOCIAL_INSURANCE_NUMBER </span>
              </p>
              <p class="block_176">
                <span class="text_4">● </span>
                <span class="text_5">DRIVER_LICENSE_NUMBER </span>
              </p>
              <p class="block_177">
                <span class="text_4">● </span>
                <span class="text_5">NATIONAL_HEALTH_SERVICE_NUMBER </span>
              </p>
              <p class="block_178">
                <span class="text_4">● </span>
                <span class="text_5">SOCIAL_SECURITY_NUMBER </span>
              </p>
              <p class="block_179">
                <span class="text_4">● </span>
                <span class="text_5">PASSPORT </span>
              </p>
              <p class="block_180">
                <span class="text_4">● </span>
                <span class="text_5">
                  TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                  identifier issued by the Australian Taxation Office (ATO) to
                  each taxpaying entity{' '}
                </span>
              </p>
              <p class="block_181">
                <span class="text_4">● </span>
                <span class="text_5">
                  LOCATION_STREET: If the street name is heard, mark as PII.
                  Other locations such as State, City, County, zip code are all
                  OK to transcribe.{' '}
                </span>
              </p>
              <p class="block_182">
                <span class="text_4">● </span>
                <span class="text_5">
                  LOCATION_STREET_NUMBER: If the street number is heard, mark as
                  PII. Other locations such as State, City, County, zip code are
                  all OK to transcribe.{' '}
                </span>
              </p>
              <p class="block_183">
                <span class="text_4">● </span>
                <span class="text_5">MRN (medical record number) </span>
              </p>
              <p class="block_184">
                <span class="text_4">● </span>
                <span class="text_5">
                  BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                  Securities Identification Procedures. A CUSIP number
                  identifies most financial instruments, including: stocks of
                  all registered U.S. and Canadian companies, commercial paper,
                  and U.S. government and municipal bonds.{' '}
                </span>
              </p>
              <p class="block_185">
                <span class="text_4">● </span>
                <span class="text_5">
                  BC_PHN: Each B.C. resident enrolled with the Medical Services
                  Plan (MSP) is given a unique lifetime identifier for health
                  care called a Personal Health Number (PHN){' '}
                </span>
              </p>
              <p class="block_186">
                <span class="text_4">● </span>
                <span class="text_5">OHIP: Ontario Health Insurance Plan </span>
              </p>
              <p class="block_187">
                <span class="text_4">● </span>
                <span class="text_5">
                  QUEBEC_HIN: Quebec Health Insurance Number{' '}
                </span>
              </p>
              <p class="block_188">
                <span class="text_4">● </span>
                <span class="text_5">
                  CNI NIR: The French national identity card (French: Carte
                  nationale d'identite or CNI) is an official identity document
                  consisting of a laminated plastic card bearing a photograph,
                  name and address.{' '}
                </span>
              </p>
              <p class="block_189">
                <span class="text_4">● </span>
                <span class="text_5">
                  IBAN_CODE: The International Bank Account Number (IBAN) is an
                  internationally agreed system of identifying bank accounts{' '}
                </span>
              </p>
              <p class="block_190">
                <span class="text_4">● </span>
                <span class="text_5">
                  SWIFT_CODE: A SWIFT code is an international bank code that
                  identifies particular banks worldwide. It's also known as a
                  Bank Identifier Code (BIC).{' '}
                </span>
              </p>
              <p class="block_191">
                <span class="text_4">● </span>
                <span class="text_5">
                  BANK_ROUTING_MICR: The numbers located on the bottom of a
                  check is called a MICR line. MICR means Magnetic Image
                  Character Recognition. The MICR line is made up of three sets
                  of numbers. The first set is called the ABA Bank Routing
                  Number or routing transit number (RTN){' '}
                </span>
              </p>
              <p class="block_192">
                <span class="text_4">● </span>
                <span class="text_5">
                  DEA_NUMBER: A DEA number (DEA Registration Number) is an
                  identifier assigned to a health care provider (such as a
                  physician, optometrist, dentist, or veterinarian) by the
                  United States Drug Enforcement Administration{' '}
                </span>
              </p>
              <p class="block_193">
                <span class="text_4">● </span>
                <span class="text_5">
                  HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                  unique 10-digit identification number issued to health care
                  providers in the United States by the Centers for Medicare and
                  Medicaid Services (CMS).{' '}
                </span>
              </p>
              <p class="block_194">
                <span class="text_4">● </span>
                <span class="text_5">MEDICARE_NUMBER </span>
              </p>
              <p class="block_195">
                <span class="text_4">● </span>
                <span class="text_5">
                  NIE_NUMBER: The NIE is a tax identification number in Spain{' '}
                </span>
              </p>
              <p class="block_196">
                <span class="text_4">● </span>
                <span class="text_5">
                  CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or Natural
                  Persons Register) is a number assigned by the Brazilian
                  revenue agency to both Brazilians and resident aliens who are
                  subject to taxes in Brazil{' '}
                </span>
              </p>
              <p class="block_197">
                <span class="text_4">● </span>
                <span class="text_5">
                  PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code that
                  acts as an identification for individuals, families and
                  corporates (Indian or Foreign), especially those who pay
                  Income Tax{' '}
                </span>
              </p>
              <p class="block_198">
                <span class="text_4">● </span>
                <span class="text_5">
                  BSN_NUMBER: netherlands: The citizen service number (BSN) is a
                  unique personal number allocated to everyone registered in the
                  Personal Records Database (BRP).{' '}
                </span>
              </p>
              <p class="block_199">
                <span class="text_4">● </span>
                <span class="text_5">
                  ICD_CODE: International Statistical Classification of Diseases
                  and Related Health Problems (ICD), a medical classification
                  list by the World Health Organization (WHO). It contains codes
                  for diseases, signs and symptoms, abnormal findings,
                  complaints, social circumstances, and external causes of
                  injury or diseases.{' '}
                </span>
              </p>
              <p class="block_200">
                <span class="text_4">● </span>
                <span class="text_5">FDA_CODE: Prescription drug </span>
              </p>
              <p class="block_201">
                <span class="text_4">● </span>
                <span class="text_5">
                  NIF: Tax Identification Number in Spain
                  http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html{' '}
                </span>
              </p>
              <p class="block_202">
                <span class="text_4">● </span>
                <span class="text_5">TAXPAYER_REFERENCE </span>
              </p>
              <p class="block_203">
                <span class="text_4">● </span>
                <span class="text_5">
                  CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                  Registro de Poblacion (translated into English as Unique
                  Population Registry Code or else as Personal ID Code Number).
                  It is a unique identity code for both citizens and residents
                  of Mexico.{' '}
                </span>
              </p>
              <p class="block_204">
                <span class="text_4">● </span>
                <span class="text_5">
                  RRN: Receiver Registration Number (RNN) is a 10-character
                  alphanumeric can be to a bank account, a credit/debit card,
                  mobile wallet, or home delivery.{' '}
                </span>
              </p>
              <p class="block_205">
                Information that does not fit the above PII rules should NOT be
                considered PII. Some examples of things that are not PII are:{' '}
              </p>
              <p class="block_206">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Commonly known names like Taylor Swift, Tom Hanks, Michael
                  Jordan{' '}
                </span>
              </p>
              <p class="block_207">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">
                  : Company or Business name, phone number, or address.{' '}
                </span>
              </p>
              <p class="block_208">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Pet names </span>
              </p>
              <p class="block_209">
                <span class="text_2">C</span>
                <span class="text_3">ORRECT</span>
                <span class="text_2">: Social media handles </span>
              </p>
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
