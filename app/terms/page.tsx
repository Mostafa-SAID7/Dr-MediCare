import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: 'Terms and Conditions | MediCare',
  description: 'Terms and conditions for using MediCare services',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-grid-dots">
      <Header currentPath="/terms" />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PageHeader 
            title="Terms and Conditions"
            description="Please read these terms carefully before using our services"
          />
          
          <Card className="mt-8">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using MediCare's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Medical Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  MediCare provides a platform to connect patients with healthcare professionals. We facilitate:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Online appointment booking</li>
                  <li>Doctor consultations</li>
                  <li>Medical record management</li>
                  <li>Health information services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  As a user of MediCare, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Respect the privacy of other users and healthcare providers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Appointments and Cancellations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Appointments must be cancelled at least 24 hours in advance. Late cancellations or no-shows may result in cancellation fees. Healthcare providers reserve the right to reschedule appointments when necessary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Privacy and Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to protecting your privacy and personal health information. All data is handled in accordance with HIPAA regulations and our Privacy Policy. Your medical information is encrypted and securely stored.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment is required at the time of booking unless otherwise arranged. We accept major credit cards and insurance. Consultation fees are non-refundable except in cases of provider cancellation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MediCare acts as a platform connecting patients with healthcare providers. We are not responsible for the medical advice, diagnosis, or treatment provided by healthcare professionals. All medical decisions should be made in consultation with qualified healthcare providers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Emergency Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MediCare is not an emergency service. In case of a medical emergency, please call 911 or visit your nearest emergency room immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="mt-3 text-muted-foreground">
                  <p>Email: legal@medicare.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Healthcare Ave, Medical City, MC 12345</p>
                </div>
              </section>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: March 3, 2026
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
