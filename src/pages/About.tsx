import Sidebar from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6 overflow-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground">About AI Security</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Learn more about our AI security platform and mission
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are dedicated to protecting AI systems from adversarial attacks and ensuring 
                the security and reliability of machine learning models in production environments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our team consists of security researchers, ML engineers, and industry experts 
                working together to advance AI security practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                What We Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide comprehensive red teaming services for AI systems, identifying 
                vulnerabilities before they can be exploited by malicious actors.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Our Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Using cutting-edge techniques and the MITRE ATT&CK framework, we simulate 
                real-world attack scenarios to test AI system resilience.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Have questions about our AI security services? Get in touch with our team.
            </p>
            <p className="text-sm">
              <strong>Email:</strong> security@aisecurity.example.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
