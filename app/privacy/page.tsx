import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: 'Privacy Policy | MediCare',
  description: 'Privacy policy and data protection information for MediCare services',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-grid-dots">
      <Header currentPath="/privacy" />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PageHeader 
            title="Privacy Policy"
            description="Your privacy and data security are our top priorities"
          />
          
          <Card className="mt-8">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Personal information (name, email, phone number, date of birth)</li>
                  <li>Medical information (health history, symptoms, medications)</li>
                  <li>Insurance information</li>
                  <li>Appointment and consultation records</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process appointments and facilitate consultations</li>
                  <li>Communicate with you about your appointments and health</li>
                  <li>Process payments and prevent fraud</li>
                  <li>Comply with legal obligations and regulations</li>
                  <li>Send you important updates and notifications</li>
                  <li>Improve our platform and user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. HIPAA Compliance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MediCare is committed to protecting your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate administrative, physical, and technical safeguards to protect your Protected Health Information (PHI). Your medical information is encrypted both in transit and at rest.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Healthcare providers you choose to consult with</li>
                  <li>Service providers who assist in operating our platform</li>
                  <li>Insurance companies for billing and claims processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We never sell your personal or medical information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>256-bit SSL encryption for all data transmission</li>
                  <li>Encrypted database storage</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication options</li>
                  <li>Strict access controls and employee training</li>
                  <li>Regular data backups and disaster recovery plans</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access your personal and medical information</li>
                  <li>Request corrections to your information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Receive a copy of your health records</li>
                  <li>Restrict certain uses of your information</li>
                  <li>File a complaint with regulatory authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to improve your experience, analyze usage patterns, and personalize content. You can control cookie preferences through your browser settings. Essential cookies required for platform functionality cannot be disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations. Medical records are retained in accordance with applicable healthcare regulations, typically for a minimum of 7 years after your last appointment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="mt-3 text-muted-foreground space-y-1">
                  <p>Privacy Officer: privacy@medicare.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Healthcare Ave, Medical City, MC 12345</p>
                  <p className="mt-3">
                    For HIPAA-related concerns: hipaa@medicare.com
                  </p>
                </div>
              </section>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: March 3, 2026
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This policy is compliant with HIPAA, GDPR, and CCPA regulations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
