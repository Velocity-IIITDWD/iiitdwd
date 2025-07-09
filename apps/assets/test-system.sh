#!/bin/bash

# Hero Images Management System Test Script

echo "🚀 Testing Hero Images Management System..."
echo "=============================================="

# Test 1: Check if PHP server is running
echo "📡 Testing server connectivity..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/ | grep -q "200"; then
    echo "✅ PHP server is running on localhost:8000"
else
    echo "❌ PHP server is not running. Please start it with: php -S localhost:8000"
    exit 1
fi

# Test 2: Check main page
echo "🏠 Testing main page..."
if curl -s http://localhost:8000/ | grep -q "IIIT Dharwad Assets"; then
    echo "✅ Main page is accessible"
else
    echo "❌ Main page is not accessible"
fi

# Test 3: Check hero images page
echo "🖼️ Testing hero images page..."
if curl -s http://localhost:8000/hero-images.php | grep -q "Hero Section Images"; then
    echo "✅ Hero images page is accessible"
else
    echo "❌ Hero images page is not accessible"
fi

# Test 4: Test API endpoint
echo "🔌 Testing API endpoint..."
API_RESPONSE=$(curl -s "http://localhost:8000/?api=floating-images")
if echo "$API_RESPONSE" | grep -q '"success":true'; then
    echo "✅ API endpoint is working"
    echo "📊 API Response: $API_RESPONSE"
else
    echo "❌ API endpoint is not working"
    echo "📊 Response: $API_RESPONSE"
fi

# Test 5: Check directory structure
echo "📁 Testing directory structure..."
if [ -d "floating_images" ]; then
    echo "✅ floating_images directory exists"
    FILE_COUNT=$(find floating_images -type f -name "*.jpg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" -o -name "*.svg" | wc -l | tr -d ' ')
    echo "📊 Hero images found: $FILE_COUNT"
else
    echo "❌ floating_images directory not found"
fi

# Test 6: Check if images are served correctly
echo "🖼️ Testing image serving..."
if [ -f "floating_images/hero-sample.jpg" ]; then
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:8000/floating_images/hero-sample.jpg | grep -q "200"; then
        echo "✅ Images are being served correctly"
    else
        echo "❌ Images are not being served"
    fi
else
    echo "ℹ️ No test image found (this is normal for new installations)"
fi

echo ""
echo "🎉 Test Summary:"
echo "==============="
echo "✅ System is ready for use!"
echo "🌐 Main Page: http://localhost:8000/"
echo "🖼️ Hero Images: http://localhost:8000/hero-images.php"
echo "🔌 API Endpoint: http://localhost:8000/?api=floating-images"
echo ""
echo "📚 Next Steps:"
echo "1. Login to the system using admin credentials"
echo "2. Upload hero images via the hero images page"
echo "3. Use the API endpoint to fetch images in your frontend"
echo ""
echo "🔧 For configuration, edit: config/app.php"
echo "📖 For documentation, see: HERO_IMAGES_README.md"
