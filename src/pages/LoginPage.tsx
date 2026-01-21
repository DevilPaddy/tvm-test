import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User, Building2, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyD1E0MlbubkDNIF4XbfLpiBqTq1iT4y-AU",
  authDomain: "tvm-database-d59e2.firebaseapp.com",
  projectId: "tvm-database-d59e2",
  storageBucket: "tvm-database-d59e2.firebasestorage.app",
  messagingSenderId: "911290806613",
  appId: "1:911290806613:web:dbabb19e1ed35cedd0ffdc",
  measurementId: "G-820R7843K3"
};

// Simulated Firebase functions for demo (replace with actual Firebase SDK)
const auth = {
  signInWithEmailAndPassword: async (email, password) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (email === "demo@example.com" && password === "password") {
      return { user: { uid: "123", email } };
    }
    throw new Error("Invalid credentials");
  },
  createUserWithEmailAndPassword: async (email, password) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { user: { uid: "456", email } };
  },
  updateProfile: async (user, profile) => {
    // Simulate profile update
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Signup form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  
  // Toast state
  const [toast, setToast] = useState(null);

  const showToast = (title, description, variant = "default") => {
    setToast({ title, description, variant });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    try {
      const userCredential = await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
      console.log("Login successful:", userCredential.user);
      
      showToast(
        "Welcome back!",
        "You have successfully logged in to TVM IT Solutions",
        "success"
      );
      
      // Navigate to dashboard (simulated)
      setTimeout(() => {
        console.log("Redirecting to dashboard...");
      }, 1000);
      
    } catch (error) {
      console.error("Login error:", error);
      showToast(
        "Login Failed",
        error.message || "Please check your credentials and try again",
        "error"
      );
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (signupPassword !== signupConfirmPassword) {
      showToast(
        "Password Mismatch",
        "Please make sure your passwords match",
        "error"
      );
      return;
    }
    
    if (signupPassword.length < 6) {
      showToast(
        "Weak Password",
        "Password must be at least 6 characters long",
        "error"
      );
      return;
    }
    
    setIsSigningUp(true);
    
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(signupEmail, signupPassword);
      
      // Update user profile with display name
      await auth.updateProfile(userCredential.user, {
        displayName: signupName
      });
      
      console.log("Signup successful:", userCredential.user);
      
      showToast(
        "Account Created!",
        "Welcome to TVM IT Solutions. Your account has been created successfully.",
        "success"
      );
      
      // Navigate to dashboard (simulated)
      setTimeout(() => {
        console.log("Redirecting to dashboard...");
      }, 1000);
      
    } catch (error) {
      console.error("Signup error:", error);
      showToast(
        "Signup Failed",
        error.message || "Please try again with different credentials",
        "error"
      );
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
      
      {/* Toast notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg animate-in slide-in-from-top-2 ${
          toast.variant === 'success' ? 'bg-green-500 text-white' : 
          toast.variant === 'error' ? 'bg-red-500 text-white' : 
          'bg-blue-500 text-white'
        }`}>
          {toast.variant === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <div>
            <div className="font-medium">{toast.title}</div>
            <div className="text-sm opacity-90">{toast.description}</div>
          </div>
        </div>
      )}
      
      <div className="relative w-full max-w-md">
        <Card className="backdrop-blur-sm bg-white/80 shadow-2xl border-0 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Building2 size={32} />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center mb-2">
              TVM IT Solutions
            </CardTitle>
            <CardDescription className="text-center text-blue-100">
              Your trusted technology partner
            </CardDescription>
          </div>
          
          <CardContent className="px-6 py-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
                <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="p-0 h-auto text-xs text-blue-600 hover:text-blue-800"
                        type="button"
                      >
                        Forgot password?
                      </Button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="password" 
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="Enter your password" 
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-11 px-3 hover:bg-transparent"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                      >
                        {showLoginPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleLogin}
                    className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 mt-6" 
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-gray-700 font-medium">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-gray-700 font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="signup-password" 
                        type={showSignupPassword ? "text" : "password"}
                        placeholder="Create a password" 
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-11 px-3 hover:bg-transparent"
                        onClick={() => setShowSignupPassword(!showSignupPassword)}
                      >
                        {showSignupPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-gray-700 font-medium">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="confirm-password" 
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password" 
                        value={signupConfirmPassword}
                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                        className="pl-10 pr-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-11 px-3 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleSignup}
                    className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 mt-6" 
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="px-6 pb-6">
            <p className="text-xs text-center w-full text-gray-500">
              By continuing, you agree to our{" "}
              <Button variant="link" className="p-0 h-auto text-xs text-blue-600 hover:text-blue-800">
                Terms of Service
              </Button>{" "}
              and{" "}
              <Button variant="link" className="p-0 h-auto text-xs text-blue-600 hover:text-blue-800">
                Privacy Policy
              </Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;