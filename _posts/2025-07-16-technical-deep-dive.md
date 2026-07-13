---
layout: post
title: "RightNow Technical Deep Dive: Building in Public"
date: 2025-07-16 05:00:00 +0000
crosspost: true
categories: technical
tags: [development, flutter, architecture, open-source]
---

As an indie developer building RightNow in public, I want to share the technical journey and decisions behind the app. This isn't about showing off code - it's about sharing what I've learned and helping others who might be on a similar path.

## The Numbers: A Growing Codebase

For a sense of scale: the app is somewhere north of 40,000 lines of Dart, with roughly another 10,000 lines of tests. Big enough that architecture decisions matter; small enough that one person can still hold it in their head. Mostly.

## Architecture: Why Offline-First?

Early on, I made a crucial decision: **offline-first architecture**. Here's why:

```mermaid
graph TD
    A[User Action] --> B[Local Update]
    B --> C[Instant UI Change]
    B --> D[Queue for Sync]
    D --> E{Online?}
    E -->|Yes| F[Sync to Cloud]
    E -->|No| G[Wait & Retry]
    G --> E
```

### Benefits I've Experienced

1. **Lightning fast UI** - No waiting for network calls
2. **Works anywhere** - Airplane, subway, poor connection
3. **No loading spinners** - Everything feels instant
4. **Reliability** - Network issues don't break the app

### The Trade-offs

- More complex sync logic
- Potential for conflicts (solved with timestamps)
- Larger app size (local database)
- Testing is more involved

## State Management Evolution

I went through several iterations before landing on the current architecture:

### Version 1: Simple Provider
```
Widget → Provider → Database
```
**Problem**: Too much rebuilding, poor performance

### Version 2: Repository Pattern
```
Widget → Provider → Repository → Database
```
**Better**: Separation of concerns, easier testing

### Version 3: Current Architecture
```mermaid
graph LR
    A[UI Widget] --> B[Riverpod Provider]
    B --> C[Repository Interface]
    C --> D[Hive Repository]
    C --> E[Mock Repository]
    D --> F[Local Database]
    E --> G[Test Data]
```

This pattern has paid for itself many times over:
- **Testing** - Swap real/mock repositories easily
- **Features** - Add new data sources without touching UI
- **Debugging** - Clear separation of layers

## The Testing Journey

Testing wasn't an afterthought - it evolved with the app:

```mermaid
graph TD
    A[Manual Testing Only] --> B[Basic Widget Tests]
    B --> C[Repository Tests]
    C --> D[Integration Tests]
    D --> E[Full Test Suite]
    
    style A fill:#ff6b6b
    style B fill:#ffa06b
    style C fill:#ffda6b
    style D fill:#9fd86b
    style E fill:#6bd8a0
```

### Current Test Coverage

- **Unit Tests**: Repository logic, data models
- **Widget Tests**: UI components in isolation  
- **Integration Tests**: Full user workflows
- **Manual Tests**: Real device testing

### Testing Lessons Learned

1. **Start simple** - Even basic tests catch bugs
2. **Mock at boundaries** - Repository interfaces are perfect
3. **Test user journeys** - Not just individual functions
4. **Keep tests fast** - Or you won't run them

## Feature Development Process

Here's how I typically build a new feature:

```mermaid
graph TD
    A[User Feedback] --> B[Design in Figma]
    B --> C[Create Data Model]
    C --> D[Build Repository]
    D --> E[Write Tests]
    E --> F[Create UI]
    F --> G[Connect Provider]
    G --> H[Manual Testing]
    H --> I[Ship It!]
```

### Real Example: Task Grooming Games

The gamification feature went through this exact process:

1. **Feedback**: "Grooming backlog is boring"
2. **Design**: Swipe-based card games
3. **Model**: GroomingData with score tracking
4. **Repository**: Separate from main task repo
5. **Tests**: Swipe gesture handling
6. **UI**: Custom game widgets
7. **Provider**: Game state management
8. **Testing**: Friends loved it!
9. **Shipped**: In 3 days

## Performance Optimizations

Building for mobile taught me about performance the hard way:

### Problem 1: Slow List Scrolling
**Solution**: Implemented virtualization
```mermaid
graph LR
    A[1000 Tasks] --> B[Render Only Visible]
    B --> C[~20 Widgets]
    C --> D[Smooth 60fps]
```

### Problem 2: Expensive Rebuilds
**Solution**: Selective watching with Riverpod
```dart
// Instead of watching entire task list
ref.watch(taskListProvider.select((tasks) => tasks.length))
```

### Problem 3: Memory Leaks
**Solution**: Proper disposal and lifecycle management

## Platform Challenges

Supporting multiple platforms brought unique challenges:

```mermaid
graph TD
    A[Flutter App] --> B[Android]
    A --> C[iOS]
    A --> D[Web]
    A --> E[Desktop]
    
    B --> F[Play Store]
    C --> G[App Store]
    D --> H[Firebase Hosting]
    E --> I[Direct Download]
```

### Platform-Specific Issues

- **Android**: Keyboard handling, back button
- **iOS**: Safe areas, gesture conflicts  
- **Web**: Browser back button, local storage limits
- **Desktop**: Window management, file system

## Key Technical Decisions

### ✅ Decisions I'm Happy With

1. **Flutter** - Write once, run everywhere actually works
2. **Offline-first** - Users love the speed
3. **Hive database** - Simple, fast, reliable
4. **Repository pattern** - Made everything testable
5. **Riverpod** - Powerful state management

### 🤔 Decisions I'd Reconsider

1. **Not using code generation earlier** - Would have saved time
2. **Custom animation system** - Should have used built-in
3. **Over-engineering early** - YAGNI is real
4. **Delaying tests** - Should have started day one

## Deployment Pipeline

Getting the app to users efficiently:

```mermaid
graph LR
    A[Git Push] --> B[GitHub Actions]
    B --> C[Run Tests]
    C --> D[Build Apps]
    D --> E[Deploy Web]
    D --> F[Upload to Stores]
    F --> G[Users!]
```

But when GitHub Actions minutes ran out, I adapted:

```batch
:: Local build script
flutter test
flutter build web
firebase deploy
flutter build appbundle
:: then upload the bundle to the Play Console
```

## Lessons for Other Indie Developers

### 1. Start Shipping Early
Don't wait for perfection. My first version had 5 features, not 50.

### 2. Use Your Own App
I'm my own harshest tester. The best fixes came from being annoyed by my own software daily.

### 3. Automate Everything
Time spent on automation pays back 10x.

### 4. Test the Critical Path
You don't need 100% coverage, just test what matters.

### 5. Document as You Go
This blog post was easier because I kept notes.

## What's Next?

Technically speaking, the areas I keep poking at — no promises:

- Making sync more robust (it's the hardest part of the codebase, and probably always will be)
- Smarter estimation help based on your own history
- More refinement game modes

## Join the Journey

Building in public means sharing the good and the bad. Follow along:

- 📱 Try the app: [rtnw.app](https://rtnw.app)
- 📝 Blog series: [All RightNow posts](/blog.html)

Have questions? Want to share your experience? I'd love to hear from you.

---

*Previous: [Who RightNow is For ←](/blog/target-audience-use-cases/) | Next: [Introduction to RightNow →](/blog/introduction-to-rightnow/)*

---

*Learn more: [RightNow App Development](/rightnow/) | [Privacy Policy](/rightnow-privacy-policy/) | [Delete Account](/rightnow-delete-account/)*